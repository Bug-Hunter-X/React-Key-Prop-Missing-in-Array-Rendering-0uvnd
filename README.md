# React Key Prop Missing in Array Rendering

This repository demonstrates a common React bug related to missing the `key` prop when rendering lists.  Missing the `key` prop can lead to performance issues and unexpected behavior in your application.  The provided code shows how to reproduce the error and demonstrates a proper solution using a unique `key` for each list item.

## Bug Description

When rendering lists in React using `.map()`, it is crucial to provide a `key` prop to each item.  This key helps React identify and update elements efficiently.  Without a `key`, React may struggle to reconcile elements between renders, leading to performance problems and potential unexpected behavior, such as elements not being updated correctly.

## Solution

The solution involves simply adding a `key` prop to each element in the mapped array.  The `key` should be a unique identifier for each item, such as the item's ID or index.  Using the index as a key is generally acceptable as long as the order of items will not change, but a unique identifier from your data is the best approach.