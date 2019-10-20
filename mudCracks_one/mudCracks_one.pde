import java.util.*;

color bg = #ffffff;

float width = 500;
float height = 500;

MudCrackGenerator mudCrackGenerator = new MudCrackGenerator();

void setup() {
  size(500, 500);
  frameRate(30);
  background(#ffffff);
}

void draw() {
  background(#ffffff);
  mudCrackGenerator.update();
  mudCrackGenerator.draw();
  //saveFrame("f####.png");
}

public class NotFoundException extends Exception { 
  public NotFoundException(String errorMessage) {
    super(errorMessage);
  }
}

class Point implements Cloneable {
  private float _x;
  private float _y;
  private boolean _isNull = false;

  public Point() {
    _isNull = true;
  }

  public Point(float x, float y) {
    _x = x;
    _y = y;
    _isNull = false;
  }

  public void setX(float x) {
    _x = x;
  }

  public void setY(float y) {
    _y = y;
  }

  public float x() {
    return _x;
  }

  public float y() {
    return _y;
  }

  boolean isFinite() {
    return !Float.isInfinite(_x) && !Float.isInfinite(_y);
  }

  boolean isNull() {
    return _isNull;
  }

  public Point clone() throws CloneNotSupportedException {
    return (Point)super.clone();
  }
}

class Node {
  private Point _point;
  private ArrayList<Edge> _edges = new ArrayList<Edge>();
  private String _uuid;

  private Node() {
    _uuid = UUID.randomUUID().toString();
  }

  public Node(float x, float y) {
    this();
    _point = new Point(x, y);
  }

  public Node(Point p) {
    this();
    try {
      _point = p.clone();
    } 
    catch(CloneNotSupportedException e) {
      println("Cloning Point not supported.");
    }
  }

  public boolean equals(Node n) 
  { 
    return _uuid == n.getUuid();
  }  

  public float getX() {
    return _point.x();
  }

  public float getY() {
    return _point.y();
  }

  public String getUuid() {
    return _uuid;
  }

  public Point getPoint() {
    return _point;
  }
  
  public void addEdge(Edge edge) {
     _edges.add(edge);
  }

  public void draw() {
    fill(#000000);
    ellipse(_point.x(), _point.y(), 3, 3);
  }
}

class Edge {
  private Node _source;
  private Node _destination;
  private Line _line;
  private boolean _isNull;
  public Edge() {
    _isNull = true;
  }

  public Edge(Node source, Node destination) {
    _source = source;
    _destination = destination;
    _line = new Line(source.getPoint(), destination.getPoint());
    _isNull = false;
  }  
  public void logger() {
    println("Src: ", _source.getUuid(), " Dst: ", _destination.getUuid());
    println(_source.getPoint().x(), _source.getPoint().y());
    println(_destination.getPoint().x(), _destination.getPoint().y());
  }


  boolean isNull() {
    return _isNull;
  }

  Node getSource() {
    return _source;
  }

  Node getDestination() {
    return _destination;
  }

  Line getLine() {
    return _line;
  }

  float getLength() {
    float dX = _source.getPoint().x() - _destination.getPoint().x();
    float dY = _source.getPoint().y() - _destination.getPoint().y();
    return sqrt((dX * dX) + (dY * dY));
  }

  Point getMidPoint() {
    float dX = (_source.getPoint().x() + _destination.getPoint().x()) / 2;
    float dY = (_source.getPoint().y() + _destination.getPoint().y()) / 2;
    return new Point(dX, dY);
  }

  void draw() {
    strokeWeight(1.1);
    noFill();
    line(
      getSource().getX(), 
      getSource().getY(), 
      getDestination().getX(), 
      getDestination().getY()
      );
  }
}

class Graph {
  private Edge _longestEdge;
  private ArrayList<Node> _nodes = new ArrayList<Node>();
  private ArrayList<Edge> _edges = new ArrayList<Edge>();
  private String _uuid;
  private color _colour;

  public Graph() {
    _uuid = UUID.randomUUID().toString();
    _colour = color(random(255), random(255), random(255));
  }

  public Graph(List<Node> nodes) {
    this();
    _nodes = new ArrayList(nodes);
  }

  public String getUuid() {
    return _uuid;
  }

  public void addNode(Node node) {
    _nodes.add(node);
  }

  public void addConnection(String srcUuid, String destinationUuid) {
    try {
      Node sourceNode = findNode(srcUuid);
      Node destinationNode = findNode(destinationUuid);
      if (!hasConnection(sourceNode, destinationNode)) {
        Edge edge = new Edge(sourceNode, destinationNode);
        _edges.add(edge);
      }
    } 
    catch (NotFoundException e) {
      println(e.getMessage());
      exit();
    }
  }

  public void addConnection(Node sourceNode, Node destinationNode) {
    if (!hasConnection(sourceNode, destinationNode)) {
      Edge edge = new Edge(sourceNode, destinationNode);
      _edges.add(edge);
    }
  }

  public boolean hasConnection(Node source, Node destination) {
    ListIterator i = _edges.listIterator();
    while (i.hasNext()) {
      Edge e = (Edge)i.next();
      if (e.getSource() == source && e.getDestination() == destination) {
        return true;
      }
    }

    return false;
  }

  public boolean hasEdges() {
    return _edges.size() > 0;
  }

  public boolean hasNodes() {
    return _nodes.size() > 0;
  }

  public ArrayList<Node> getNodes() {
    return _nodes;
  }  

  public ArrayList<Edge> getEdges() {
    return _edges;
  }  

  public Node findNode(String uuid) throws NotFoundException {
    ListIterator i = _nodes.listIterator();
    while (i.hasNext()) {
      Node n = (Node)i.next();
      if (n.getUuid().equals(uuid)) {
        return n;
      }
    }

    throw new NotFoundException("Node not found");
  }

  public Edge getLongestEdge() {
    // Longest edge can be set when adding a new node
    // If it's the first edge it's the longest, otherwise if longer than the current longest
    // It will need to be updated when splitting an edge via findLongestEdge
    return _longestEdge;
  }

  // Todo: workout what's happening here
  //       Splitting longest node should join the graphs. 
  public Edge findLongestEdge() {
    Edge longestEdge = _edges.get(0);
    for (Edge e : _edges) {
      if (e.getLength() > longestEdge.getLength()) {
        longestEdge = e;
      }
    }
    _longestEdge = longestEdge;
    return longestEdge;
  }
  
  public void findLargestLoop() {
    for (Node n: _nodes) {
      
    }
  }

  // Todo: workout what's happening here
  public void splitLongestEdge() {
    if (_longestEdge == null) {
      return;
    }
    Point midPoint = _longestEdge.getMidPoint();
    Node mid = new Node(midPoint);
    Node source = _longestEdge.getSource();
    Node destination = _longestEdge.getDestination();
    addConnection(source, mid);
    addConnection(mid, destination);
    removeEdge(_longestEdge);
  }

  public void splitEdge(Edge edge, Node splitPoint) {
    Node source = edge.getSource();
    Node destination = edge.getDestination();
    addConnection(source, splitPoint);
    addConnection(splitPoint, destination);
    removeEdge(edge);
  }

  public void removeEdge(Edge edge) {
    ListIterator i = _edges.listIterator();
    while (i.hasNext()) {
      Edge e = (Edge)i.next();
      if (e.getSource().getUuid() == edge.getSource().getUuid() && e.getDestination().getUuid() == edge.getDestination().getUuid()) {
        i.remove();
      }
    }
  }

  public Edge findIntersect(Line line) {
    for (Edge e : _edges) {
      if (e.getLine().isIntersect(line)) {
        return e;
      }
    }
    return new Edge();
  }

  public boolean mergeGraph(Graph graph) {
    if (graph.getUuid() == _uuid) {
      return false;
    }
    _nodes.addAll(graph.getNodes());
    _edges.addAll(graph.getEdges());

    return true;
  }

  public void draw() {
    stroke(_colour);
    ArrayList<Node> drawnNodes = new ArrayList<Node>();
    ListIterator i = _edges.listIterator();
    while (i.hasNext()) {
      Edge e = (Edge)i.next();
      e.draw();
      // This is to prevent nodes being drawn multiple times
      // Workout a way to check it is working
      if (!drawnNodes.contains(e.getSource())) {
        e.getSource().draw();
        drawnNodes.add(e.getSource());
      }
      if (!drawnNodes.contains(e.getDestination())) {
        e.getDestination().draw();
        drawnNodes.add(e.getDestination());
      }
    }
    drawnNodes.clear();
  }

  public void logger() {
    println("Graph");
    println("UUID: ", _uuid);
    for (Edge e : _edges) {
      e.logger();
    }
  }
}

class MudCrackGenerator {
  private ArrayList<Graph> _graphList = new ArrayList<Graph>();
  private ArrayList<PathTracer> _activePathTracers = new ArrayList<PathTracer>();
  private ArrayList<PathTracer> _nextPathTracers = new ArrayList<PathTracer>();

  MudCrackGenerator() {
    for (int i = 0; i < 3; i++) {
      Node node = new Node(new Point(random(400) + 50, random(400) + 50));
      Graph graph = startGraph(node);
      preparePathTracer(graph, node, random(PI * 2), 5);
    }
    startNextPathTracers();
  }

  void preparePathTracer(Graph graph, Node node, float angle, float speed) {
    PathTracer pt = new PathTracer(graph, node, angle, speed);
    _nextPathTracers.add(pt);
  }

  void startNextPathTracers() {
    for (PathTracer pt : _nextPathTracers) {
      _activePathTracers.add(pt);
    }
    _nextPathTracers = new ArrayList<PathTracer>();
  }

  Graph startGraph(Node node) {
    Graph graph = new Graph();
    graph.addNode(node);
    addGraph(graph);
    return graph;
  }

  void addGraph(Graph graph) {
    _graphList.add(graph);
  }

  Graph getGraphWithLongestEdge() {
    // Todo: workout why this causes a crash
    //       Possibly could use a list iterator instead... or maybe not.
    Graph g = _graphList.get(0);
    Edge longestEdge = g.findLongestEdge();
    int graphIndex = 0;
    for (int i = 1; i < _graphList.size(); i++) {
      g = _graphList.get(i);
      if (g.hasEdges()) {
        Edge currentEdge = g.findLongestEdge();
        if (currentEdge.getLength() > longestEdge.getLength()) {
          longestEdge = currentEdge;
          graphIndex = i;
        }
      }
    }

    return _graphList.get(graphIndex);
  }

  float getNewAngle(Edge longestEdge) {
    float newAngle = atan2(
      longestEdge.getSource().getPoint().y() - longestEdge.getDestination().getPoint().y(), 
      longestEdge.getSource().getPoint().x() - longestEdge.getDestination().getPoint().x() 
      );
    if (random(1) > 0.5) {
      newAngle += PI / 2;
    } else {
      newAngle -= PI / 2;
    }
    return newAngle;
  }

  void prepareNewPathTracer() {
    Graph graph = getGraphWithLongestEdge();
    graph.splitLongestEdge();
    Edge longestEdge = graph.getLongestEdge();
    Node midPointNode = new Node(longestEdge.getMidPoint());
    float newAngle = getNewAngle(longestEdge);
    preparePathTracer(graph, midPointNode, newAngle, 5);
  }

  void update() {
    ListIterator iter = _activePathTracers.listIterator();
    while (iter.hasNext()) {
      PathTracer pt = (PathTracer)iter.next();
      pt.createNextNode();

      if (!pt.isInBounds()) {
        prepareNewPathTracer();
        iter.remove();
        continue;
      }

      ListIterator graphIter = _graphList.listIterator();
      while (graphIter.hasNext()) {
        Graph g = (Graph)graphIter.next();
        Edge intersectEdge = g.findIntersect(pt.getLine());
        if (
          !intersectEdge.isNull()
          && pt.getLastPoint().x() != intersectEdge.getDestination().getPoint().x()
          && pt.getLastPoint().x() != intersectEdge.getSource().getPoint().x()
          ) {
          Point intersect = intersectEdge.getLine().getIntersect(pt.getLine());
          Node intersectNode = new Node(intersect);
          g.splitEdge(intersectEdge, intersectNode);
          pt.terminateNode(intersectNode);
          boolean didMergeGraph = pt.getGraph().mergeGraph(g);
          if (didMergeGraph) {
            updateActivePathTracerGraphs(pt, g);
            graphIter.remove();
          }
          prepareNewPathTracer();
          // Todo: Remove drawIntersect, for testing only.
          drawIntersect(intersectNode);
          iter.remove();
          break;
        }
      }
      //pt.getGraph().logger();

      Node nextNode = pt.getCurrentNode();
      pt.getGraph().addNode(nextNode);
      pt.getGraph().addConnection(pt.getLastNode(), nextNode);
    }
    startNextPathTracers();
  }

  void updateActivePathTracerGraphs(PathTracer pt, Graph g) {
    for (PathTracer pt2 : _activePathTracers) {
      if (pt2.getGraph().getUuid() == g.getUuid()) {
        pt2.setGraph(pt.getGraph());
      }
    }
  }

  void drawIntersect(Node intersectNode) {
    fill(#ff0000);
    ellipse(intersectNode.getPoint().x(), intersectNode.getPoint().y(), 8, 8);
  }

  void draw() {
    for (Graph g : _graphList) {
      g.draw();
    }
  }
}

class Vector {
  private Point _point;

  Vector(float x, float y) {
    _point = new Point(x, y);
  }

  Vector(Point point) {
    try {
      _point = point.clone();
    } 
    catch(CloneNotSupportedException e) {
      println("Cloning Point not supported.");
    }
  }

  float x() {
    return _point.x();
  }

  void setX(float x) {
    _point.setX(x);
  }

  float y() {
    return _point.y();
  }

  void setY(float y) {
    _point.setY(y);
  }

  Point getPoint() {
    return _point;
  }

  void setPoint(Point point) {
    _point = point;
  }

  void setAngle(float angle) {
    float _length = getLength();
    _point.setX(cos(angle) * _length);
    _point.setY(sin(angle) * _length);
  }

  float getAngle() {
    return atan2(_point.y(), _point.x());
  }

  void setLength(float _length) {
    float angle = this.getAngle();
    _point.setX(cos(angle) * _length);
    _point.setY(sin(angle) * _length);
  }

  float getLength() {
    return sqrt(
      _point.x() * _point.x() +
      _point.y() * _point.y()
      );
  }

  Vector addVector(Vector v2) {
    return new Vector(_point.x() + v2.x(), _point.y() + v2.y());
  }

  Vector subtractVector(Vector v2) {
    return new Vector(_point.x() - v2.x(), _point.y() - v2.y());
  }

  Vector multiply(float value) {
    return new Vector(_point.x() * value, _point.y() * value);
  }

  Vector divide(float value) {
    return new Vector(_point.x() / value, _point.y() / value);
  }

  void addTo(Vector v2) {
    _point.setX(_point.x() + v2.x());
    _point.setY(_point.y() + v2.y());
  }

  void subtractFrom(Vector v2) {
    _point.setX(_point.x() - v2.x());
    _point.setY(_point.y() - v2.y());
  }

  void multiplyBy(float value) {
    _point.setX(_point.x() * value);
    _point.setY(_point.y() * value);
  }

  void divideBy(float value) {
    _point.setX(_point.x() / value);
    _point.setY(_point.y() / value);
  }

  void angleTo(Vector v2) {
    atan2(
      v2.y() - _point.y(), 
      v2.x() - _point.x() 
      );
  }

  float distanceTo(Vector v2) {
    float dX = _point.x() - v2.x();
    float dY = _point.y() - v2.y();
    return sqrt((dX * dX) + (dY * dY));
  }
}

class Line {
  private Point _p, _q;

  Line(Point p, Point q) {
    this._p = p;
    this._q = q;
  }

  Point getIntersect(Line l2) {
    float a1 = _p.y() - _q.y();
    float b1 = _q.x() - _p.x();
    float c1 = a1 * _q.x() + b1 * _q.y();

    float a2 = l2.p().y() - l2.q().y();
    float b2 = l2.q().x() - l2.p().x();
    float c2 = a2 * l2.q().x() + b2 * l2.q().y();

    float delta = a1 * b2 - a2 * b1;
    return new Point((b2 * c1 - b1 * c2) / delta, (a1 * c2 - a2 * c1) / delta);
  }

  boolean isIntersect(Line l2) {
    Point intersect = getIntersect(l2);
    return intersect.isFinite() && onSegment(intersect) && l2.onSegment(intersect);
  }

  boolean onSegment(Point r) 
  {
    if (r.x() <= max(p().x(), q().x()) && r.x() >= min(p().x(), q().x()) && 
      r.y() <= max(p().y(), q().y()) && r.y() >= min(p().y(), q().y())) 
      return true; 

    return false;
  } 

  float maxX() {
    return max(_p.x(), _q.x());
  }

  float maxY() {
    return max(_p.y(), _q.y());
  }

  float minX() {
    return min(_p.x(), _q.x());
  }

  float minY() {
    return min(_p.y(), _q.y());
  }

  Point p() {
    return _p;
  }

  Point q() {
    return _q;
  }
}

class PathTracer {
  private Graph _graph;
  private Node _lastNode;
  private Node _currentNode;
  private Vector _position;
  private Vector _velocity;
  private float _angle = 0;
  private float _speed = 10;

  PathTracer(Graph graph, Node node) {
    _graph = graph;
    _currentNode = node;
    _lastNode = node;
    _position = new Vector(node.getPoint());
    _velocity = new Vector(0, 0);
    _velocity.setLength(_speed);
    _velocity.setAngle(_angle);
  }

  PathTracer(Graph graph, Node node, float angle, float speed) {
    this(graph, node);
    _angle = angle;
    _speed = speed;
    _velocity.setLength(_speed);
    _velocity.setAngle(_angle);
  }

  Graph getGraph() {
    return _graph;
  }

  void setGraph(Graph graph) {
    _graph = graph;
  }

  void createNextNode() {
    _lastNode = _currentNode;
    _angle += 0.2 - random(0.4);
    _velocity.setAngle(_angle);
    _position.addTo(_velocity.multiply(random(_speed/3 * 2) + _speed / 3));
    _currentNode = new Node(_position.getPoint());
  }

  Node getCurrentNode() {
    return _currentNode;
  }

  void terminateNode(Node intersectNode) {
    _currentNode = intersectNode;
  }

  Node getLastNode() {
    return _lastNode;
  }

  Point getPoint() {
    return _position.getPoint();
  }

  Point getLastPoint() {
    return _lastNode.getPoint();
  }

  Line getLine() {
    return new Line(_position.getPoint(), getLastPoint());
  }

  boolean isInBounds() {
    return !(x() > 550 || x() < -50 || y() > 550 || y() < -50);
  }

  float x() {
    return _position.x();
  }

  float y() {
    return _position.y();
  }
}
