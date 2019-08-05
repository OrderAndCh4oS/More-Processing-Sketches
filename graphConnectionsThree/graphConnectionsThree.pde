import java.util.*;

color bg = #1e2a57;

float width = 1280;
float height = 640;
ArrayList<Node> nodes = new ArrayList<Node>();
ArrayList<Graph> graphList = new ArrayList<Graph>();

void setup() {
  // This is run once at the start of the script
  size(1280, 640);
  background(bg);
  for (int j = 0; j < 64 * 7; j++) {
    Graph graph = new Graph();
    graphList.add(graph);
    for (int i = 0; i < 13; i++) {
      String nodeName = Integer.toString(i);
      Node newNode = new Node(nodeName, random(75), random(75));
      graph.addNode(newNode);
    }
    for (int i = 0; i < 34; i++) {
      int nameOne = (int)random(12);
      int nameTwo = (int)random(12);
      while (nameOne == nameTwo) {
        nameTwo = (int)random(12);
      }
      println(nameOne);
      println(nameTwo);
      graph.addConnection(Integer.toString(nameOne), Integer.toString(nameTwo));
    }
  }
}

void draw() {
  background(bg);
  int x = 0;
  int y = 0;
  for (Graph g : graphList) {
    if (x > 0 && x % 64 == 0) {
      y++;
    }
    pushMatrix();
    translate(x % 64 * 90 + 20, y * 90 + 10);
    g.draw();
    popMatrix();
    x++;
  }
  saveFrame("#f0000.png");
  exit();
}

public class NotFoundException extends Exception { 
  public NotFoundException(String errorMessage) {
    super(errorMessage);
  }
}

class Point implements Cloneable {
  private float x;
  private float y;
  public Point(float x, float y) {
    this.x = x;
    this.y = y;
  }

  public void setX(float x) {
    this.x = x;
  }

  public void setY(float y) {
    this.y = y;
  }

  public float getX() {
    return x;
  }

  public float getY() {
    return y;
  }

  public Point clone() throws CloneNotSupportedException {
    return (Point)super.clone();
  }
}

class Node {
  Point coordinates;
  String name;
  String uuid;
  private Node(String name) {
    this.name = name;
    this.uuid = UUID.randomUUID().toString();
  }
  public Node(String name, float x, float y) {
    this(name);
    this.coordinates = new Point(x, y);
  }
  public Node(String name, Point coordinates) {
    this(name);
    try {
      this.coordinates = coordinates.clone();
    } 
    catch(CloneNotSupportedException e) {
      println("Cloning Point not supported.");
    }
  }
  public boolean equals(Node n) 
  { 
    return this.uuid == n.uuid;
  }  
  public String getName() {
    return name;
  }
  public float getX() {
    return coordinates.x;
  }
  public float getY() {
    return coordinates.y;
  }

  public void draw() {
    ellipse(coordinates.getX(), coordinates.getY(), 3, 3);
  }
}

class Edge {
  Node source;
  Node destination;
  public Edge(Node source, Node destination) {
    this.source = source;
    this.destination = destination;
  }

  Node getSource() {
    return source;
  }

  Node getDestination() {
    return destination;
  }
}

class Graph {
  ArrayList<Node> nodes = new ArrayList<Node>();
  ArrayList<Edge> edges = new ArrayList<Edge>();
  public Graph() {
  }
  public Graph(List<Node> nodes) {
    this.nodes = new ArrayList(nodes);
  }

  public void addNode(Node node) {
    this.nodes.add(node);
  }

  public void addConnection(String srcNodeName, String destinationNodeName) {
    try {
      Node sourceNode = findNode(srcNodeName);
      Node destinationNode = findNode(destinationNodeName);
      if (!hasConnection(sourceNode, destinationNode)) {
        Edge edge = new Edge(sourceNode, destinationNode);
        edges.add(edge);
      }
    } 
    catch (NotFoundException e) {
      println(e.getMessage());
      exit();
    }
  }

  public boolean hasConnection(Node source, Node destination) {
    ListIterator i = edges.listIterator();
    while (i.hasNext()) {
      Edge e = (Edge)i.next();
      if (e.getSource() == source && e.getDestination() == destination) {
        return true;
      }
    }

    return false;
  }

  public Node findNode(String nodeName) throws NotFoundException {
    ListIterator i = nodes.listIterator();
    while (i.hasNext()) {
      Node n = (Node)i.next();
      if (n.getName().equals(nodeName)) {
        return n;
      }
    }

    throw new NotFoundException("Node not found");
  }

  public void draw() {
    ArrayList<Node> drawnNodes = new ArrayList<Node>();
    ListIterator i = edges.listIterator();
    while (i.hasNext()) {
      Edge e = (Edge)i.next();
      strokeWeight(1.1);
      stroke(#fff73d);
      noFill();
      line(
        e.getSource().getX(), 
        e.getSource().getY(), 
        e.getDestination().getX(), 
        e.getDestination().getY()
        );
      fill(#fff73d);
      noStroke();
      if (!drawnNodes.contains(e.getSource())) {
        e.getSource().draw();
      }
      if (!drawnNodes.contains(e.getDestination())) {
        e.getDestination().draw();
      }
    }
  }
}
