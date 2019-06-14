import java.util.*;

color bg = color(125, 140, 160);

float width = 640;
float height = 360;

Graph graph = new Graph();

void setup() {
  // This is run once at the start of the script
  size(640, 360);
  background(bg);
  Node nodeOne = new Node("one", 100, 100);
  Node nodeTwo = new Node("two", 25, 25);
  Node nodeThree = new Node("three", 100, 15);
  Node nodeFour = new Node("four", 140, 200);
  graph.addNode(nodeOne);
  graph.addNode(nodeTwo);
  graph.addNode(nodeThree);
  graph.addNode(nodeFour);
  graph.addConnection("one", "two");
  graph.addConnection("two", "three");
  graph.addConnection("three", "one");
  graph.addConnection("three", "four");
  graph.addConnection("four", "two");
  graph.addConnection("four", "one");
}

void draw() {
   graph.draw();   
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
  public Graph() {}
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
     } catch (NotFoundException e) {
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
      if (n.getName() == nodeName) {
        return n;
      }
    }
    
    throw new NotFoundException("Node not found");
  }
  
  public void draw() {
    ListIterator i = edges.listIterator();
    while (i.hasNext()) {
      Edge e = (Edge)i.next();
      line(e.source.getX(), e.source.getY(), e.destination.getX(), e.destination.getY());
    }
  }
}
