package main

import (
  "fmt"
)


type Tree struct {
  Left *Tree
  Value int
  Right *Tree
}

func (t *Tree) Insert(val int) *Tree {
  if (t == nil) {
    fmt.Println("creating new tree")
    t = &Tree{nil, val, nil};
  } else if (t.Value > val) {
    fmt.Println("going to left child")
    t.Left.Insert(val);
  } else if (t.Value < val) {
    fmt.Println("going to right child")
    t.Right.Insert(val);
  }
  return t;
}

func (t *Tree) Traverse(f func(*Tree)) {
  fmt.Println("traversing");
  if ( t== nil) {
    fmt.Println("t is nil");
    return;
  }
  t.Left.Traverse(f);
  fmt.Println("calling function");
  f(t);
  t.Right.Traverse(f);
}

func printValue(t *Tree) {
  fmt.Println("printing value");
  fmt.Println(t.Value);
}

func (t *Tree) Size() int {
  t.Traverse(printValue);
  return 1;
}

func main() {
  var t *Tree
  t = t.Insert(5);
  t = t.Insert(4);
  t = t.Insert(6);
  t = t.Insert(9);
  t.Size()
  
}