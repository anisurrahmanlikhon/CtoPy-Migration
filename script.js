var categories = {
  'loop': {
    'c': `#include <stdio.h>\n\nint main() {\n    for(int i = 0; i < 10; i++) {\n        printf("%d\\n", i);\n    }\n    return 0;\n}`,
    'python': `for i in range(10):\n    print(i)`
  },
  
  'conditional': {
    'c': `#include <stdio.h>\n\nint main() {\n    int x = 10;\n    if (x > 5) {\n        printf("x is greater than 5\\n");\n    } else {\n        printf("x is less than or equal to 5\\n");\n    }\n    return 0;\n}`,
    'python': `x = 10\nif x > 5:\n    print('x is greater than 5')\nelse:\n    print('x is less than or equal to 5')`
  },
  
  'recursion': {
    'c': `#include <stdio.h>\n\nint factorial(int n) {\n    if (n == 0)\n        return 1;\n    else\n        return n * factorial(n - 1);\n}\n\nint main() {\n    int num = 5;\n    printf("Factorial of %d is %d\\n", num, factorial(num));\n    return 0;\n}`,
    'python': `def factorial(n):\n    if n == 0:\n        return 1\n    else:\n        return n * factorial(n - 1)\n\nnum = 5\nprint(f"Factorial of {num} is {factorial(num)}")`
  },
  
  'sorting': {
    'c': `#include <stdio.h>\n\nvoid bubbleSort(int arr[], int n) {\n    int i, j, temp;\n    for (i = 0; i < n-1; i++) {\n        for (j = 0; j < n-i-1; j++) {\n            if (arr[j] > arr[j+1]) {\n                temp = arr[j];\n                arr[j] = arr[j+1];\n                arr[j+1] = temp;\n            }\n        }\n    }\n}\n\nint main() {\n    int arr[] = {64, 34, 25, 12, 22, 11, 90};\n    int n = sizeof(arr)/sizeof(arr[0]);\n    bubbleSort(arr, n);\n    printf("Sorted array: ");\n    for (int i=0; i < n; i++)\n        printf("%d ", arr[i]);\n    printf("\\n");\n    return 0;\n}`,
    'python': `def bubble_sort(arr):\n    n = len(arr)\n    for i in range(n-1):\n        for j in range(0, n-i-1):\n            if arr[j] > arr[j+1]:\n                arr[j], arr[j+1] = arr[j+1], arr[j]\n\narr = [64, 34, 25, 12, 22, 11, 90]\nbubble_sort(arr)\nprint("Sorted array:", arr)`
  }
  // Add more categories and examples as needed
};

function loadCode() {
  var categorySelect = document.getElementById('categorySelect');
  var selectedCategory = categorySelect.value;
  
  var cCodeTextarea = document.getElementById('cCodeTextarea');
  var pyCodeTextarea = document.getElementById('pyCodeTextarea');

  // Retrieve code examples based on selected category and language
  var cCodeExample = categories[selectedCategory]['c'];
  var pyCodeExample = categories[selectedCategory]['python'];

  // Set code examples to textareas
  cCodeTextarea.textContent = cCodeExample;
  pyCodeTextarea.textContent = pyCodeExample;

  // Apply Prism syntax highlighting
  Prism.highlightAll();
}

function copyCode(elementId) {
  var copyText = document.getElementById(elementId);
  var textArea = document.createElement("textarea");
  textArea.value = copyText.textContent;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  textArea.remove();
  alert("Code copied to clipboard");
}

// Initial load on page load
loadCode();

var categories = {
  'input_output': {
    'c': `#include <stdio.h>\n\nint main() {\n    int num;\n    printf("Enter a number: ");\n    scanf("%d", &num);\n    printf("You entered: %d\\n", num);\n    return 0;\n}`,
    'python': `num = int(input("Enter a number: "))\nprint(f"You entered: {num}")`
  },
  
  'variable_declaration': {
    'c': `#include <stdio.h>\n\nint main() {\n    int a = 5;\n    float b = 3.14;\n    char c = 'A';\n    printf("a = %d\\n", a);\n    printf("b = %f\\n", b);\n    printf("c = %c\\n", c);\n    return 0;\n}`,
    'python': `a = 5\nb = 3.14\nc = 'A'\nprint(f"a = {a}")\nprint(f"b = {b}")\nprint(f"c = {c}")`
  },
  
  'loop': {
    'c': `#include <stdio.h>\n\nint main() {\n    for(int i = 0; i < 5; i++) {\n        printf("%d\\n", i);\n    }\n    return 0;\n}`,
    'python': `for i in range(5):\n    print(i)`
  },
  
  'condition': {
    'c': `#include <stdio.h>\n\nint main() {\n    int x = 10;\n    if (x > 5) {\n        printf("x is greater than 5\\n");\n    } else {\n        printf("x is less than or equal to 5\\n");\n    }\n    return 0;\n}`,
    'python': `x = 10\nif x > 5:\n    print('x is greater than 5')\nelse:\n    print('x is less than or equal to 5')`
  },
  
  'array': {
    'c': `#include <stdio.h>\n\nint main() {\n    int arr[5] = {1, 2, 3, 4, 5};\n    for (int i = 0; i < 5; i++) {\n        printf("%d ", arr[i]);\n    }\n    printf("\\n");\n    return 0;\n}`,
    'python': `arr = [1, 2, 3, 4, 5]\nfor elem in arr:\n    print(elem, end=' ')`
  },
  
  'string': {
    'c': `#include <stdio.h>\n\nint main() {\n    char str[] = "Hello, World!";\n    printf("%s\\n", str);\n    return 0;\n}`,
    'python': `str = "Hello, World!"\nprint(str)`
  },
  
  'character': {
    'c': `#include <stdio.h>\n\nint main() {\n    char c = 'A';\n    printf("%c\\n", c);\n    return 0;\n}`,
    'python': `c = 'A'\nprint(c)`
  },
  
  'structure': {
    'c': `#include <stdio.h>\n\nstruct Person {\n    char name[50];\n    int age;\n};\n\nint main() {\n    struct Person p;\n    strcpy(p.name, "John");\n    p.age = 30;\n    printf("Name: %s, Age: %d\\n", p.name, p.age);\n    return 0;\n}`,
    'python': `class Person:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n\np = Person("John", 30)\nprint(f"Name: {p.name}, Age: {p.age}")`
  },
  
  'union': {
    'c': `#include <stdio.h>\n\nunion Data {\n    int i;\n    float f;\n    char str[20];\n};\n\nint main() {\n    union Data data;\n    data.i = 10;\n    data.f = 220.5;\n    strcpy(data.str, "C Programming");\n    printf("data.i : %d\\n", data.i);\n    printf("data.f : %f\\n", data.f);\n    printf("data.str : %s\\n", data.str);\n    return 0;\n}`,
    'python': `# Union equivalent is not directly translatable in Python, typically handled using classes or dictionaries`
  },
  
  'function': {
    'c': `#include <stdio.h>\n\nint add(int a, int b) {\n    return a + b;\n}\n\nint main() {\n    int result = add(5, 3);\n    printf("Result: %d\\n", result);\n    return 0;\n}`,
    'python': `def add(a, b):\n    return a + b\n\nresult = add(5, 3)\nprint(f"Result: {result}")`
  },
  
  'math': {
    'c': `#include <stdio.h>\n#include <math.h>\n\nint main() {\n    double num = 16.0;\n    printf("Square root of %.1f = %.2f\\n", num, sqrt(num));\n    printf("Absolute value of -5 = %.1f\\n", fabs(-5.0));\n    return 0;\n}`,
    'python': `import math\n\nnum = 16.0\nprint(f"Square root of {num} = {math.sqrt(num):.2f}")\nprint(f"Absolute value of -5 = {math.fabs(-5.0):.1f}")`
  },
  
  'pointer': {
    'c': `#include <stdio.h>\n\nint main() {\n    int var = 5;\n    int *ptr = &var;\n    printf("Value of var: %d\\n", var);\n    printf("Address of var: %p\\n", &var);\n    printf("Value of ptr: %p\\n", ptr);\n    printf("Value pointed by ptr: %d\\n", *ptr);\n    return 0;\n}`,
    'python': `# Pointers are not directly available in Python; typically handled using references and object attributes`
  },
  
  'recursion': {
    'c': `#include <stdio.h>\n\nint factorial(int n) {\n    if (n == 0)\n        return 1;\n    else\n        return n * factorial(n - 1);\n}\n\nint main() {\n    int num = 5;\n    printf("Factorial of %d is %d\\n", num, factorial(num));\n    return 0;\n}`,
    'python': `def factorial(n):\n    if n == 0:\n        return 1\n    else:\n        return n * factorial(n - 1)\n\nnum = 5\nprint(f"Factorial of {num} is {factorial(num)}")`
  },
  
  'bubble_sort': {
    'c': `#include <stdio.h>\n\nvoid bubbleSort(int arr[], int n) {\n    int i, j, temp;\n    for (i = 0; i < n-1; i++) {\n        for (j = 0; j < n-i-1; j++) {\n            if (arr[j] > arr[j+1]) {\n                temp = arr[j];\n                arr[j] = arr[j+1];\n                arr[j+1] = temp;\n            }\n        }\n    }\n}\n\nint main() {\n    int arr[] = {64, 34, 25, 12, 22, 11, 90};\n    int n = sizeof(arr)/sizeof(arr[0]);\n    bubbleSort(arr, n);\n    printf("Sorted array: ");\n    for (int i=0; i < n; i++)\n        printf("%d ", arr[i]);\n    printf("\\n");\n    return 0;\n}`,
    'python': `def bubble_sort(arr):\n    n = len(arr)\n    for i in range(n-1):\n        for j in range(0, n-i-1):\n            if arr[j] > arr[j+1]:\n                arr[j], arr[j+1] = arr[j+1], arr[j]\n\narr = [64, 34, 25, 12, 22, 11, 90]\nbubble_sort(arr)\nprint("Sorted array:", arr)`
  },
  
  'selection_sort': {
    'c': `#include <stdio.h>\n\nvoid selectionSort(int arr[], int n) {\n    int i, j, min_idx, temp;\n    for (i = 0; i < n-1; i++) {\n        min_idx = i;\n        for (j = i+1; j < n; j++) {\n            if (arr[j] < arr[min_idx])\n                min_idx = j;\n        }\n        temp = arr[min_idx];\n        arr[min_idx] = arr[i];\n        arr[i] = temp;\n    }\n}\n\nint main() {\n    int arr[] = {64, 34, 25, 12, 22, 11, 90};\n    int n = sizeof(arr)/sizeof(arr[0]);\n    selectionSort(arr, n);\n    printf("Sorted array: ");\n    for (int i=0; i < n; i++)\n        printf("%d ", arr[i]);\n    printf("\\n");\n    return 0;\n}`,
    'python': `def selection_sort(arr):\n    n = len(arr)\n    for i in range(n-1):\n        min_idx = i\n        for j in range(i+1, n):\n            if arr[j] < arr[min_idx]:\n                min_idx = j\n        arr[i], arr[min_idx] = arr[min_idx], arr[i]\n\narr = [64, 34, 25, 12, 22, 11, 90]\nselection_sort(arr)\nprint("Sorted array:", arr)`
  },
  
  'insertion_sort': {
    'c': `#include <stdio.h>\n\nvoid insertionSort(int arr[], int n) {\n    int i, key, j;\n    for (i = 1; i < n; i++) {\n        key = arr[i];\n        j = i - 1;\n        while (j >= 0 && arr[j] > key) {\n            arr[j + 1] = arr[j];\n            j = j - 1;\n        }\n        arr[j + 1] = key;\n    }\n}\n\nint main() {\n    int arr[] = {64, 34, 25, 12, 22, 11, 90};\n    int n = sizeof(arr)/sizeof(arr[0]);\n    insertionSort(arr, n);\n    printf("Sorted array: ");\n    for (int i=0; i < n; i++)\n        printf("%d ", arr[i]);\n    printf("\\n");\n    return 0;\n}`,
    'python': `def insertion_sort(arr):\n    for i in range(1, len(arr)):\n        key = arr[i]\n        j = i - 1\n        while j >= 0 and key < arr[j]:\n            arr[j + 1] = arr[j]\n            j -= 1\n        arr[j + 1] = key\n\narr = [64, 34, 25, 12, 22, 11, 90]\ninsertion_sort(arr)\nprint("Sorted array:", arr)`
  },
  
  'linear_search': {
    'c': `#include <stdio.h>\n\nint linearSearch(int arr[], int n, int x) {\n    for (int i = 0; i < n; i++) {\n        if (arr[i] == x)\n            return i;\n    }\n    return -1; // Element not found\n}\n\nint main() {\n    int arr[] = {10, 20, 30, 40, 50};\n    int n = sizeof(arr)/sizeof(arr[0]);\n    int x = 30;\n    int result = linearSearch(arr, n, x);\n    if (result == -1)\n        printf("Element is not present in array\\n");\n    else\n        printf("Element is present at index %d\\n", result);\n    return 0;\n}`,
    'python': `def linear_search(arr, x):\n    for i in range(len(arr)):\n        if arr[i] == x:\n            return i\n    return -1  # Element not found\n\narr = [10, 20, 30, 40, 50]\nx = 30\nresult = linear_search(arr, x)\nif result == -1:\n    print("Element is not present in array")\nelse:\n    print(f"Element is present at index {result}")`
  },
  
  'binary_search': {
    'c': `#include <stdio.h>\n\nint binarySearch(int arr[], int l, int r, int x) {\n    while (l <= r) {\n        int mid = l + (r - l) / 2;\n        if (arr[mid] == x)\n            return mid;\n        if (arr[mid] < x)\n            l = mid + 1;\n        else\n            r = mid - 1;\n    }\n    return -1; // Element not found\n}\n\nint main() {\n    int arr[] = {10, 20, 30, 40, 50};\n    int n = sizeof(arr)/sizeof(arr[0]);\n    int x = 30;\n    int result = binarySearch(arr, 0, n - 1, x);\n    if (result == -1)\n        printf("Element is not present in array\\n");\n    else\n        printf("Element is present at index %d\\n", result);\n    return 0;\n}`,
    'python': `def binary_search(arr, l, r, x):\n    while l <= r:\n        mid = l + (r - l) // 2\n        if arr[mid] == x:\n            return mid\n        elif arr[mid] < x:\n            l = mid + 1\n        else:\n            r = mid - 1\n    return -1  # Element not found\n\narr = [10, 20, 30, 40, 50]\nx = 30\nresult = binary_search(arr, 0, len(arr) - 1, x)\nif result == -1:\n    print("Element is not present in array")\nelse:\n    print(f"Element is present at index {result}")`
  },
  
  'binary_tree': {
    'c': `#include <stdio.h>\n#include <stdlib.h>\n\nstruct Node {\n    int data;\n    struct Node *left, *right;\n};\n\nstruct Node* createNode(int data) {\n    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));\n    newNode->data = data;\n    newNode->left = newNode->right = NULL;\n    return newNode;\n}\n\nint main() {\n    struct Node* root = createNode(1);\n    root->left = createNode(2);\n    root->right = createNode(3);\n    root->left->left = createNode(4);\n    printf("Binary Tree created successfully\\n");\n    return 0;\n}`,
    'python': `class TreeNode:\n    def __init__(self, data):\n        self.data = data\n        self.left = None\n        self.right = None\n\nroot = TreeNode(1)\nroot.left = TreeNode(2)\nroot.right = TreeNode(3)\nroot.left.left = TreeNode(4)\nprint("Binary Tree created successfully")`
  },
  
  'graph': {
    'c': `#include <stdio.h>\n#include <stdlib.h>\n\nstruct Graph {\n    int V;\n    int** adjMatrix;\n};\n\nstruct Graph* createGraph(int vertices) {\n    struct Graph* graph = (struct Graph*)malloc(sizeof(struct Graph));\n    graph->V = vertices;\n    graph->adjMatrix = (int**)malloc(vertices * sizeof(int*));\n    for (int i = 0; i < vertices; i++) {\n        graph->adjMatrix[i] = (int*)malloc(vertices * sizeof(int));\n        for (int j = 0; j < vertices; j++)\n            graph->adjMatrix[i][j] = 0;\n    }\n    return graph;\n}\n\nint main() {\n    int V = 4;\n    struct Graph* graph = createGraph(V);\n    printf("Graph with %d vertices created successfully\\n", V);\n    return 0;\n}`,
    'python': `class Graph:\n    def __init__(self, vertices):\n        self.V = vertices\n        self.adjMatrix = [[0] * vertices for _ in range(vertices)]\n\nV = 4\ngraph = Graph(V)\nprint(f"Graph with {V} vertices created successfully")`
  },
  
  'stack': {
    'c': `#include <stdio.h>\n#include <stdlib.h>\n#define MAX_SIZE 100\n\nstruct Stack {\n    int items[MAX_SIZE];\n    int top;\n};\n\nvoid push(struct Stack* stack, int item) {\n    if (stack->top == MAX_SIZE - 1)\n        printf("Stack Overflow\\n");\n    else {\n        stack->top++;\n        stack->items[stack->top] = item;\n    }\n}\n\nint pop(struct Stack* stack) {\n    if (stack->top == -1) {\n        printf("Stack Underflow\\n");\n        return -1;\n    } else {\n        int item = stack->items[stack->top];\n        stack->top--;\n        return item;\n    }\n}\n\nint main() {\n    struct Stack* stack = (struct Stack*)malloc(sizeof(struct Stack));\n    stack->top = -1;\n    push(stack, 1);\n    push(stack, 2);\n    push(stack, 3);\n    printf("%d popped from stack\\n", pop(stack));\n    return 0;\n}`,
    'python': `class Stack:\n    def __init__(self):\n        self.items = []\n\n    def push(self, item):\n        self.items.append(item)\n\n    def pop(self):\n        if not self.items:\n            print("Stack Underflow")\n            return -1\n        return self.items.pop()\n\nstack = Stack()\nstack.push(1)\nstack.push(2)\nstack.push(3)\nprint(f"{stack.pop()} popped from stack")`
  },
  
  'queue': {
    'c': `#include <stdio.h>\n#include <stdlib.h>\n#define MAX_SIZE 100\n\nstruct Queue {\n    int items[MAX_SIZE];\n    int front, rear;\n};\n\nstruct Queue* createQueue() {\n    struct Queue* queue = (struct Queue*)malloc(sizeof(struct Queue));\n    queue->front = -1;\n    queue->rear = -1;\n    return queue;\n}\n\nvoid enqueue(struct Queue* queue, int value) {\n    if (queue->rear == MAX_SIZE - 1)\n        printf("Queue Overflow\\n");\n    else {\n        if (queue->front == -1)\n            queue->front = 0;\n        queue->rear++;\n        queue->items[queue->rear] = value;\n    }\n}\n\nint dequeue(struct Queue* queue) {\n    if (queue->front == -1) {\n        printf("Queue Underflow\\n");\n        return -1;\n    } else {\n        int item = queue->items[queue->front];\n        queue->front++;\n        if (queue->front > queue->rear)\n            queue->front = queue->rear = -1;\n        return item;\n    }\n}\n\nint main() {\n    struct Queue* queue = createQueue();\n    enqueue(queue, 1);\n    enqueue(queue, 2);\n    enqueue(queue, 3);\n    printf("%d dequeued from queue\\n", dequeue(queue));\n    return 0;\n}`,
    'python': `from collections import deque\n\nqueue = deque()\nqueue.append(1)\nqueue.append(2)\nqueue.append(3)\nprint(f"{queue.popleft()} dequeued from queue")`
  }
};


    function loadCode() {
      var categorySelect = document.getElementById('categorySelect');
      var selectedCategory = categorySelect.value;
      
      var cCodeTextarea = document.getElementById('cCodeTextarea');
      var pyCodeTextarea = document.getElementById('pyCodeTextarea');

      // Retrieve code examples based on selected category and language
      var cCodeExample = categories[selectedCategory]['c'];
      var pyCodeExample = categories[selectedCategory]['python'];

      // Set code examples to textareas
      cCodeTextarea.textContent = cCodeExample;
      pyCodeTextarea.textContent = pyCodeExample;

      // Apply Prism syntax highlighting
      Prism.highlightAll();
    }

    function copyCode(elementId) {
      var copyText = document.getElementById(elementId);
      var textArea = document.createElement("textarea");
      textArea.value = copyText.textContent;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      textArea.remove();
      alert("Code copied to clipboard");
    }

    // Initial load on page load
    loadCode();
var categories = {
  'input_output': {
    'c': `#include <stdio.h>\n\nint main() {\n    int num;\n    printf("Enter a number: ");\n    scanf("%d", &num);\n    printf("You entered: %d\\n", num);\n    return 0;\n}`,
    'python': `num = int(input("Enter a number: "))\nprint(f"You entered: {num}")`
  },
  
  'variable_declaration': {
    'c': `#include <stdio.h>\n\nint main() {\n    int a = 5;\n    float b = 3.14;\n    char c = 'A';\n    printf("a = %d\\n", a);\n    printf("b = %f\\n", b);\n    printf("c = %c\\n", c);\n    return 0;\n}`,
    'python': `a = 5\nb = 3.14\nc = 'A'\nprint(f"a = {a}")\nprint(f"b = {b}")\nprint(f"c = {c}")`
  },
  
  'loop': {
    'c': `#include <stdio.h>\n\nint main() {\n    for(int i = 0; i < 5; i++) {\n        printf("%d\\n", i);\n    }\n    return 0;\n}`,
    'python': `for i in range(5):\n    print(i)`
  },
  
  'condition': {
    'c': `#include <stdio.h>\n\nint main() {\n    int x = 10;\n    if (x > 5) {\n        printf("x is greater than 5\\n");\n    } else {\n        printf("x is less than or equal to 5\\n");\n    }\n    return 0;\n}`,
    'python': `x = 10\nif x > 5:\n    print('x is greater than 5')\nelse:\n    print('x is less than or equal to 5')`
  },
  
  'array': {
    'c': `#include <stdio.h>\n\nint main() {\n    int arr[5] = {1, 2, 3, 4, 5};\n    for (int i = 0; i < 5; i++) {\n        printf("%d ", arr[i]);\n    }\n    printf("\\n");\n    return 0;\n}`,
    'python': `arr = [1, 2, 3, 4, 5]\nfor elem in arr:\n    print(elem, end=' ')`
  },
  
  'string': {
    'c': `#include <stdio.h>\n\nint main() {\n    char str[] = "Hello, World!";\n    printf("%s\\n", str);\n    return 0;\n}`,
    'python': `str = "Hello, World!"\nprint(str)`
  },
  
  'character': {
    'c': `#include <stdio.h>\n\nint main() {\n    char c = 'A';\n    printf("%c\\n", c);\n    return 0;\n}`,
    'python': `c = 'A'\nprint(c)`
  },
  
  'structure': {
    'c': `#include <stdio.h>\n\nstruct Person {\n    char name[50];\n    int age;\n};\n\nint main() {\n    struct Person p;\n    strcpy(p.name, "John");\n    p.age = 30;\n    printf("Name: %s, Age: %d\\n", p.name, p.age);\n    return 0;\n}`,
    'python': `class Person:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n\np = Person("John", 30)\nprint(f"Name: {p.name}, Age: {p.age}")`
  },
  
  'union': {
    'c': `#include <stdio.h>\n\nunion Data {\n    int i;\n    float f;\n    char str[20];\n};\n\nint main() {\n    union Data data;\n    data.i = 10;\n    data.f = 220.5;\n    strcpy(data.str, "C Programming");\n    printf("data.i : %d\\n", data.i);\n    printf("data.f : %f\\n", data.f);\n    printf("data.str : %s\\n", data.str);\n    return 0;\n}`,
    'python': `# Union equivalent is not directly translatable in Python, typically handled using classes or dictionaries`
  },
  
  'function': {
    'c': `#include <stdio.h>\n\nint add(int a, int b) {\n    return a + b;\n}\n\nint main() {\n    int result = add(5, 3);\n    printf("Result: %d\\n", result);\n    return 0;\n}`,
    'python': `def add(a, b):\n    return a + b\n\nresult = add(5, 3)\nprint(f"Result: {result}")`
  },
  
  'math': {
    'c': `#include <stdio.h>\n#include <math.h>\n\nint main() {\n    double num = 16.0;\n    printf("Square root of %.1f = %.2f\\n", num, sqrt(num));\n    printf("Absolute value of -5 = %.1f\\n", fabs(-5.0));\n    return 0;\n}`,
    'python': `import math\n\nnum = 16.0\nprint(f"Square root of {num} = {math.sqrt(num):.2f}")\nprint(f"Absolute value of -5 = {math.fabs(-5.0):.1f}")`
  },
  
  'pointer': {
    'c': `#include <stdio.h>\n\nint main() {\n    int var = 5;\n    int *ptr = &var;\n    printf("Value of var: %d\\n", var);\n    printf("Address of var: %p\\n", &var);\n    printf("Value of ptr: %p\\n", ptr);\n    printf("Value pointed by ptr: %d\\n", *ptr);\n    return 0;\n}`,
    'python': `# Pointers are not directly available in Python; typically handled using references and object attributes`
  },
  
  'recursion': {
    'c': `#include <stdio.h>\n\nint factorial(int n) {\n    if (n == 0)\n        return 1;\n    else\n        return n * factorial(n - 1);\n}\n\nint main() {\n    int num = 5;\n    printf("Factorial of %d is %d\\n", num, factorial(num));\n    return 0;\n}`,
    'python': `def factorial(n):\n    if n == 0:\n        return 1\n    else:\n        return n * factorial(n - 1)\n\nnum = 5\nprint(f"Factorial of {num} is {factorial(num)}")`
  },
  
  'bubble_sort': {
    'c': `#include <stdio.h>\n\nvoid bubbleSort(int arr[], int n) {\n    int i, j, temp;\n    for (i = 0; i < n-1; i++) {\n        for (j = 0; j < n-i-1; j++) {\n            if (arr[j] > arr[j+1]) {\n                temp = arr[j];\n                arr[j] = arr[j+1];\n                arr[j+1] = temp;\n            }\n        }\n    }\n}\n\nint main() {\n    int arr[] = {64, 34, 25, 12, 22, 11, 90};\n    int n = sizeof(arr)/sizeof(arr[0]);\n    bubbleSort(arr, n);\n    printf("Sorted array: ");\n    for (int i=0; i < n; i++)\n        printf("%d ", arr[i]);\n    printf("\\n");\n    return 0;\n}`,
    'python': `def bubble_sort(arr):\n    n = len(arr)\n    for i in range(n-1):\n        for j in range(0, n-i-1):\n            if arr[j] > arr[j+1]:\n                arr[j], arr[j+1] = arr[j+1], arr[j]\n\narr = [64, 34, 25, 12, 22, 11, 90]\nbubble_sort(arr)\nprint("Sorted array:", arr)`
  },
  
  'selection_sort': {
    'c': `#include <stdio.h>\n\nvoid selectionSort(int arr[], int n) {\n    int i, j, min_idx, temp;\n    for (i = 0; i < n-1; i++) {\n        min_idx = i;\n        for (j = i+1; j < n; j++) {\n            if (arr[j] < arr[min_idx])\n                min_idx = j;\n        }\n        temp = arr[min_idx];\n        arr[min_idx] = arr[i];\n        arr[i] = temp;\n    }\n}\n\nint main() {\n    int arr[] = {64, 34, 25, 12, 22, 11, 90};\n    int n = sizeof(arr)/sizeof(arr[0]);\n    selectionSort(arr, n);\n    printf("Sorted array: ");\n    for (int i=0; i < n; i++)\n        printf("%d ", arr[i]);\n    printf("\\n");\n    return 0;\n}`,
    'python': `def selection_sort(arr):\n    n = len(arr)\n    for i in range(n-1):\n        min_idx = i\n        for j in range(i+1, n):\n            if arr[j] < arr[min_idx]:\n                min_idx = j\n        arr[i], arr[min_idx] = arr[min_idx], arr[i]\n\narr = [64, 34, 25, 12, 22, 11, 90]\nselection_sort(arr)\nprint("Sorted array:", arr)`
  },
  
  'insertion_sort': {
    'c': `#include <stdio.h>\n\nvoid insertionSort(int arr[], int n) {\n    int i, key, j;\n    for (i = 1; i < n; i++) {\n        key = arr[i];\n        j = i - 1;\n        while (j >= 0 && arr[j] > key) {\n            arr[j + 1] = arr[j];\n            j = j - 1;\n        }\n        arr[j + 1] = key;\n    }\n}\n\nint main() {\n    int arr[] = {64, 34, 25, 12, 22, 11, 90};\n    int n = sizeof(arr)/sizeof(arr[0]);\n    insertionSort(arr, n);\n    printf("Sorted array: ");\n    for (int i=0; i < n; i++)\n        printf("%d ", arr[i]);\n    printf("\\n");\n    return 0;\n}`,
    'python': `def insertion_sort(arr):\n    for i in range(1, len(arr)):\n        key = arr[i]\n        j = i - 1\n        while j >= 0 and key < arr[j]:\n            arr[j + 1] = arr[j]\n            j -= 1\n        arr[j + 1] = key\n\narr = [64, 34, 25, 12, 22, 11, 90]\ninsertion_sort(arr)\nprint("Sorted array:", arr)`
  },
  
  'linear_search': {
    'c': `#include <stdio.h>\n\nint linearSearch(int arr[], int n, int x) {\n    for (int i = 0; i < n; i++) {\n        if (arr[i] == x)\n            return i;\n    }\n    return -1; // Element not found\n}\n\nint main() {\n    int arr[] = {10, 20, 30, 40, 50};\n    int n = sizeof(arr)/sizeof(arr[0]);\n    int x = 30;\n    int result = linearSearch(arr, n, x);\n    if (result == -1)\n        printf("Element is not present in array\\n");\n    else\n        printf("Element is present at index %d\\n", result);\n    return 0;\n}`,
    'python': `def linear_search(arr, x):\n    for i in range(len(arr)):\n        if arr[i] == x:\n            return i\n    return -1  # Element not found\n\narr = [10, 20, 30, 40, 50]\nx = 30\nresult = linear_search(arr, x)\nif result == -1:\n    print("Element is not present in array")\nelse:\n    print(f"Element is present at index {result}")`
  },
  
  'binary_search': {
    'c': `#include <stdio.h>\n\nint binarySearch(int arr[], int l, int r, int x) {\n    while (l <= r) {\n        int mid = l + (r - l) / 2;\n        if (arr[mid] == x)\n            return mid;\n        if (arr[mid] < x)\n            l = mid + 1;\n        else\n            r = mid - 1;\n    }\n    return -1; // Element not found\n}\n\nint main() {\n    int arr[] = {10, 20, 30, 40, 50};\n    int n = sizeof(arr)/sizeof(arr[0]);\n    int x = 30;\n    int result = binarySearch(arr, 0, n - 1, x);\n    if (result == -1)\n        printf("Element is not present in array\\n");\n    else\n        printf("Element is present at index %d\\n", result);\n    return 0;\n}`,
    'python': `def binary_search(arr, l, r, x):\n    while l <= r:\n        mid = l + (r - l) // 2\n        if arr[mid] == x:\n            return mid\n        elif arr[mid] < x:\n            l = mid + 1\n        else:\n            r = mid - 1\n    return -1  # Element not found\n\narr = [10, 20, 30, 40, 50]\nx = 30\nresult = binary_search(arr, 0, len(arr) - 1, x)\nif result == -1:\n    print("Element is not present in array")\nelse:\n    print(f"Element is present at index {result}")`
  },
  
  'binary_tree': {
    'c': `#include <stdio.h>\n#include <stdlib.h>\n\nstruct Node {\n    int data;\n    struct Node *left, *right;\n};\n\nstruct Node* createNode(int data) {\n    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));\n    newNode->data = data;\n    newNode->left = newNode->right = NULL;\n    return newNode;\n}\n\nint main() {\n    struct Node* root = createNode(1);\n    root->left = createNode(2);\n    root->right = createNode(3);\n    root->left->left = createNode(4);\n    printf("Binary Tree created successfully\\n");\n    return 0;\n}`,
    'python': `class TreeNode:\n    def __init__(self, data):\n        self.data = data\n        self.left = None\n        self.right = None\n\nroot = TreeNode(1)\nroot.left = TreeNode(2)\nroot.right = TreeNode(3)\nroot.left.left = TreeNode(4)\nprint("Binary Tree created successfully")`
  },
  
  'graph': {
    'c': `#include <stdio.h>\n#include <stdlib.h>\n\nstruct Graph {\n    int V;\n    int** adjMatrix;\n};\n\nstruct Graph* createGraph(int vertices) {\n    struct Graph* graph = (struct Graph*)malloc(sizeof(struct Graph));\n    graph->V = vertices;\n    graph->adjMatrix = (int**)malloc(vertices * sizeof(int*));\n    for (int i = 0; i < vertices; i++) {\n        graph->adjMatrix[i] = (int*)malloc(vertices * sizeof(int));\n        for (int j = 0; j < vertices; j++)\n            graph->adjMatrix[i][j] = 0;\n    }\n    return graph;\n}\n\nint main() {\n    int V = 4;\n    struct Graph* graph = createGraph(V);\n    printf("Graph with %d vertices created successfully\\n", V);\n    return 0;\n}`,
    'python': `class Graph:\n    def __init__(self, vertices):\n        self.V = vertices\n        self.adjMatrix = [[0] * vertices for _ in range(vertices)]\n\nV = 4\ngraph = Graph(V)\nprint(f"Graph with {V} vertices created successfully")`
  },
  
  'stack': {
    'c': `#include <stdio.h>\n#include <stdlib.h>\n#define MAX_SIZE 100\n\nstruct Stack {\n    int items[MAX_SIZE];\n    int top;\n};\n\nvoid push(struct Stack* stack, int item) {\n    if (stack->top == MAX_SIZE - 1)\n        printf("Stack Overflow\\n");\n    else {\n        stack->top++;\n        stack->items[stack->top] = item;\n    }\n}\n\nint pop(struct Stack* stack) {\n    if (stack->top == -1) {\n        printf("Stack Underflow\\n");\n        return -1;\n    } else {\n        int item = stack->items[stack->top];\n        stack->top--;\n        return item;\n    }\n}\n\nint main() {\n    struct Stack* stack = (struct Stack*)malloc(sizeof(struct Stack));\n    stack->top = -1;\n    push(stack, 1);\n    push(stack, 2);\n    push(stack, 3);\n    printf("%d popped from stack\\n", pop(stack));\n    return 0;\n}`,
    'python': `class Stack:\n    def __init__(self):\n        self.items = []\n\n    def push(self, item):\n        self.items.append(item)\n\n    def pop(self):\n        if not self.items:\n            print("Stack Underflow")\n            return -1\n        return self.items.pop()\n\nstack = Stack()\nstack.push(1)\nstack.push(2)\nstack.push(3)\nprint(f"{stack.pop()} popped from stack")`
  },
  
  'queue': {
    'c': `#include <stdio.h>\n#include <stdlib.h>\n#define MAX_SIZE 100\n\nstruct Queue {\n    int items[MAX_SIZE];\n    int front, rear;\n};\n\nstruct Queue* createQueue() {\n    struct Queue* queue = (struct Queue*)malloc(sizeof(struct Queue));\n    queue->front = -1;\n    queue->rear = -1;\n    return queue;\n}\n\nvoid enqueue(struct Queue* queue, int value) {\n    if (queue->rear == MAX_SIZE - 1)\n        printf("Queue Overflow\\n");\n    else {\n        if (queue->front == -1)\n            queue->front = 0;\n        queue->rear++;\n        queue->items[queue->rear] = value;\n    }\n}\n\nint dequeue(struct Queue* queue) {\n    if (queue->front == -1) {\n        printf("Queue Underflow\\n");\n        return -1;\n    } else {\n        int item = queue->items[queue->front];\n        queue->front++;\n        if (queue->front > queue->rear)\n            queue->front = queue->rear = -1;\n        return item;\n    }\n}\n\nint main() {\n    struct Queue* queue = createQueue();\n    enqueue(queue, 1);\n    enqueue(queue, 2);\n    enqueue(queue, 3);\n    printf("%d dequeued from queue\\n", dequeue(queue));\n    return 0;\n}`,
    'python': `from collections import deque\n\nqueue = deque()\nqueue.append(1)\nqueue.append(2)\nqueue.append(3)\nprint(f"{queue.popleft()} dequeued from queue")`
  }
};


    function loadCode() {
      var categorySelect = document.getElementById('categorySelect');
      var selectedCategory = categorySelect.value;
      
      var cCodeTextarea = document.getElementById('cCodeTextarea');
      var pyCodeTextarea = document.getElementById('pyCodeTextarea');

      // Retrieve code examples based on selected category and language
      var cCodeExample = categories[selectedCategory]['c'];
      var pyCodeExample = categories[selectedCategory]['python'];

      // Set code examples to textareas
      cCodeTextarea.textContent = cCodeExample;
      pyCodeTextarea.textContent = pyCodeExample;

      // Apply Prism syntax highlighting
      Prism.highlightAll();
    }

    function copyCode(elementId) {
      var copyText = document.getElementById(elementId);
      var textArea = document.createElement("textarea");
      textArea.value = copyText.textContent;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      textArea.remove();
      alert("Code copied to clipboard");
    }

    // Initial load on page load
    loadCode();
var categories = {
  'input_output': {
    'c': `#include <stdio.h>\n\nint main() {\n    int num;\n    printf("Enter a number: ");\n    scanf("%d", &num);\n    printf("You entered: %d\\n", num);\n    return 0;\n}`,
    'python': `num = int(input("Enter a number: "))\nprint(f"You entered: {num}")`
  },
  
  'variable_declaration': {
    'c': `#include <stdio.h>\n\nint main() {\n    int a = 5;\n    float b = 3.14;\n    char c = 'A';\n    printf("a = %d\\n", a);\n    printf("b = %f\\n", b);\n    printf("c = %c\\n", c);\n    return 0;\n}`,
    'python': `a = 5\nb = 3.14\nc = 'A'\nprint(f"a = {a}")\nprint(f"b = {b}")\nprint(f"c = {c}")`
  },
  
  'loop': {
    'c': `#include <stdio.h>\n\nint main() {\n    for(int i = 0; i < 5; i++) {\n        printf("%d\\n", i);\n    }\n    return 0;\n}`,
    'python': `for i in range(5):\n    print(i)`
  },
  
  'condition': {
    'c': `#include <stdio.h>\n\nint main() {\n    int x = 10;\n    if (x > 5) {\n        printf("x is greater than 5\\n");\n    } else {\n        printf("x is less than or equal to 5\\n");\n    }\n    return 0;\n}`,
    'python': `x = 10\nif x > 5:\n    print('x is greater than 5')\nelse:\n    print('x is less than or equal to 5')`
  },
  
  'array': {
    'c': `#include <stdio.h>\n\nint main() {\n    int arr[5] = {1, 2, 3, 4, 5};\n    for (int i = 0; i < 5; i++) {\n        printf("%d ", arr[i]);\n    }\n    printf("\\n");\n    return 0;\n}`,
    'python': `arr = [1, 2, 3, 4, 5]\nfor elem in arr:\n    print(elem, end=' ')`
  },
  
  'string': {
    'c': `#include <stdio.h>\n\nint main() {\n    char str[] = "Hello, World!";\n    printf("%s\\n", str);\n    return 0;\n}`,
    'python': `str = "Hello, World!"\nprint(str)`
  },
  
  'character': {
    'c': `#include <stdio.h>\n\nint main() {\n    char c = 'A';\n    printf("%c\\n", c);\n    return 0;\n}`,
    'python': `c = 'A'\nprint(c)`
  },
  
  'structure': {
    'c': `#include <stdio.h>\n\nstruct Person {\n    char name[50];\n    int age;\n};\n\nint main() {\n    struct Person p;\n    strcpy(p.name, "John");\n    p.age = 30;\n    printf("Name: %s, Age: %d\\n", p.name, p.age);\n    return 0;\n}`,
    'python': `class Person:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n\np = Person("John", 30)\nprint(f"Name: {p.name}, Age: {p.age}")`
  },
  
  'union': {
    'c': `#include <stdio.h>\n\nunion Data {\n    int i;\n    float f;\n    char str[20];\n};\n\nint main() {\n    union Data data;\n    data.i = 10;\n    data.f = 220.5;\n    strcpy(data.str, "C Programming");\n    printf("data.i : %d\\n", data.i);\n    printf("data.f : %f\\n", data.f);\n    printf("data.str : %s\\n", data.str);\n    return 0;\n}`,
    'python': `# Union equivalent is not directly translatable in Python, typically handled using classes or dictionaries`
  },
  
  'function': {
    'c': `#include <stdio.h>\n\nint add(int a, int b) {\n    return a + b;\n}\n\nint main() {\n    int result = add(5, 3);\n    printf("Result: %d\\n", result);\n    return 0;\n}`,
    'python': `def add(a, b):\n    return a + b\n\nresult = add(5, 3)\nprint(f"Result: {result}")`
  },
  
  'math': {
    'c': `#include <stdio.h>\n#include <math.h>\n\nint main() {\n    double num = 16.0;\n    printf("Square root of %.1f = %.2f\\n", num, sqrt(num));\n    printf("Absolute value of -5 = %.1f\\n", fabs(-5.0));\n    return 0;\n}`,
    'python': `import math\n\nnum = 16.0\nprint(f"Square root of {num} = {math.sqrt(num):.2f}")\nprint(f"Absolute value of -5 = {math.fabs(-5.0):.1f}")`
  },
  
  'pointer': {
    'c': `#include <stdio.h>\n\nint main() {\n    int var = 5;\n    int *ptr = &var;\n    printf("Value of var: %d\\n", var);\n    printf("Address of var: %p\\n", &var);\n    printf("Value of ptr: %p\\n", ptr);\n    printf("Value pointed by ptr: %d\\n", *ptr);\n    return 0;\n}`,
    'python': `# Pointers are not directly available in Python; typically handled using references and object attributes`
  },
  
  'recursion': {
    'c': `#include <stdio.h>\n\nint factorial(int n) {\n    if (n == 0)\n        return 1;\n    else\n        return n * factorial(n - 1);\n}\n\nint main() {\n    int num = 5;\n    printf("Factorial of %d is %d\\n", num, factorial(num));\n    return 0;\n}`,
    'python': `def factorial(n):\n    if n == 0:\n        return 1\n    else:\n        return n * factorial(n - 1)\n\nnum = 5\nprint(f"Factorial of {num} is {factorial(num)}")`
  },
  
  'bubble_sort': {
    'c': `#include <stdio.h>\n\nvoid bubbleSort(int arr[], int n) {\n    int i, j, temp;\n    for (i = 0; i < n-1; i++) {\n        for (j = 0; j < n-i-1; j++) {\n            if (arr[j] > arr[j+1]) {\n                temp = arr[j];\n                arr[j] = arr[j+1];\n                arr[j+1] = temp;\n            }\n        }\n    }\n}\n\nint main() {\n    int arr[] = {64, 34, 25, 12, 22, 11, 90};\n    int n = sizeof(arr)/sizeof(arr[0]);\n    bubbleSort(arr, n);\n    printf("Sorted array: ");\n    for (int i=0; i < n; i++)\n        printf("%d ", arr[i]);\n    printf("\\n");\n    return 0;\n}`,
    'python': `def bubble_sort(arr):\n    n = len(arr)\n    for i in range(n-1):\n        for j in range(0, n-i-1):\n            if arr[j] > arr[j+1]:\n                arr[j], arr[j+1] = arr[j+1], arr[j]\n\narr = [64, 34, 25, 12, 22, 11, 90]\nbubble_sort(arr)\nprint("Sorted array:", arr)`
  },
  
  'selection_sort': {
    'c': `#include <stdio.h>\n\nvoid selectionSort(int arr[], int n) {\n    int i, j, min_idx, temp;\n    for (i = 0; i < n-1; i++) {\n        min_idx = i;\n        for (j = i+1; j < n; j++) {\n            if (arr[j] < arr[min_idx])\n                min_idx = j;\n        }\n        temp = arr[min_idx];\n        arr[min_idx] = arr[i];\n        arr[i] = temp;\n    }\n}\n\nint main() {\n    int arr[] = {64, 34, 25, 12, 22, 11, 90};\n    int n = sizeof(arr)/sizeof(arr[0]);\n    selectionSort(arr, n);\n    printf("Sorted array: ");\n    for (int i=0; i < n; i++)\n        printf("%d ", arr[i]);\n    printf("\\n");\n    return 0;\n}`,
    'python': `def selection_sort(arr):\n    n = len(arr)\n    for i in range(n-1):\n        min_idx = i\n        for j in range(i+1, n):\n            if arr[j] < arr[min_idx]:\n                min_idx = j\n        arr[i], arr[min_idx] = arr[min_idx], arr[i]\n\narr = [64, 34, 25, 12, 22, 11, 90]\nselection_sort(arr)\nprint("Sorted array:", arr)`
  },
  
  'insertion_sort': {
    'c': `#include <stdio.h>\n\nvoid insertionSort(int arr[], int n) {\n    int i, key, j;\n    for (i = 1; i < n; i++) {\n        key = arr[i];\n        j = i - 1;\n        while (j >= 0 && arr[j] > key) {\n            arr[j + 1] = arr[j];\n            j = j - 1;\n        }\n        arr[j + 1] = key;\n    }\n}\n\nint main() {\n    int arr[] = {64, 34, 25, 12, 22, 11, 90};\n    int n = sizeof(arr)/sizeof(arr[0]);\n    insertionSort(arr, n);\n    printf("Sorted array: ");\n    for (int i=0; i < n; i++)\n        printf("%d ", arr[i]);\n    printf("\\n");\n    return 0;\n}`,
    'python': `def insertion_sort(arr):\n    for i in range(1, len(arr)):\n        key = arr[i]\n        j = i - 1\n        while j >= 0 and key < arr[j]:\n            arr[j + 1] = arr[j]\n            j -= 1\n        arr[j + 1] = key\n\narr = [64, 34, 25, 12, 22, 11, 90]\ninsertion_sort(arr)\nprint("Sorted array:", arr)`
  },
  
  'linear_search': {
    'c': `#include <stdio.h>\n\nint linearSearch(int arr[], int n, int x) {\n    for (int i = 0; i < n; i++) {\n        if (arr[i] == x)\n            return i;\n    }\n    return -1; // Element not found\n}\n\nint main() {\n    int arr[] = {10, 20, 30, 40, 50};\n    int n = sizeof(arr)/sizeof(arr[0]);\n    int x = 30;\n    int result = linearSearch(arr, n, x);\n    if (result == -1)\n        printf("Element is not present in array\\n");\n    else\n        printf("Element is present at index %d\\n", result);\n    return 0;\n}`,
    'python': `def linear_search(arr, x):\n    for i in range(len(arr)):\n        if arr[i] == x:\n            return i\n    return -1  # Element not found\n\narr = [10, 20, 30, 40, 50]\nx = 30\nresult = linear_search(arr, x)\nif result == -1:\n    print("Element is not present in array")\nelse:\n    print(f"Element is present at index {result}")`
  },
  
  'binary_search': {
    'c': `#include <stdio.h>\n\nint binarySearch(int arr[], int l, int r, int x) {\n    while (l <= r) {\n        int mid = l + (r - l) / 2;\n        if (arr[mid] == x)\n            return mid;\n        if (arr[mid] < x)\n            l = mid + 1;\n        else\n            r = mid - 1;\n    }\n    return -1; // Element not found\n}\n\nint main() {\n    int arr[] = {10, 20, 30, 40, 50};\n    int n = sizeof(arr)/sizeof(arr[0]);\n    int x = 30;\n    int result = binarySearch(arr, 0, n - 1, x);\n    if (result == -1)\n        printf("Element is not present in array\\n");\n    else\n        printf("Element is present at index %d\\n", result);\n    return 0;\n}`,
    'python': `def binary_search(arr, l, r, x):\n    while l <= r:\n        mid = l + (r - l) // 2\n        if arr[mid] == x:\n            return mid\n        elif arr[mid] < x:\n            l = mid + 1\n        else:\n            r = mid - 1\n    return -1  # Element not found\n\narr = [10, 20, 30, 40, 50]\nx = 30\nresult = binary_search(arr, 0, len(arr) - 1, x)\nif result == -1:\n    print("Element is not present in array")\nelse:\n    print(f"Element is present at index {result}")`
  },
  
  'binary_tree': {
    'c': `#include <stdio.h>\n#include <stdlib.h>\n\nstruct Node {\n    int data;\n    struct Node *left, *right;\n};\n\nstruct Node* createNode(int data) {\n    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));\n    newNode->data = data;\n    newNode->left = newNode->right = NULL;\n    return newNode;\n}\n\nint main() {\n    struct Node* root = createNode(1);\n    root->left = createNode(2);\n    root->right = createNode(3);\n    root->left->left = createNode(4);\n    printf("Binary Tree created successfully\\n");\n    return 0;\n}`,
    'python': `class TreeNode:\n    def __init__(self, data):\n        self.data = data\n        self.left = None\n        self.right = None\n\nroot = TreeNode(1)\nroot.left = TreeNode(2)\nroot.right = TreeNode(3)\nroot.left.left = TreeNode(4)\nprint("Binary Tree created successfully")`
  },
  
  'graph': {
    'c': `#include <stdio.h>\n#include <stdlib.h>\n\nstruct Graph {\n    int V;\n    int** adjMatrix;\n};\n\nstruct Graph* createGraph(int vertices) {\n    struct Graph* graph = (struct Graph*)malloc(sizeof(struct Graph));\n    graph->V = vertices;\n    graph->adjMatrix = (int**)malloc(vertices * sizeof(int*));\n    for (int i = 0; i < vertices; i++) {\n        graph->adjMatrix[i] = (int*)malloc(vertices * sizeof(int));\n        for (int j = 0; j < vertices; j++)\n            graph->adjMatrix[i][j] = 0;\n    }\n    return graph;\n}\n\nint main() {\n    int V = 4;\n    struct Graph* graph = createGraph(V);\n    printf("Graph with %d vertices created successfully\\n", V);\n    return 0;\n}`,
    'python': `class Graph:\n    def __init__(self, vertices):\n        self.V = vertices\n        self.adjMatrix = [[0] * vertices for _ in range(vertices)]\n\nV = 4\ngraph = Graph(V)\nprint(f"Graph with {V} vertices created successfully")`
  },
  
  'stack': {
    'c': `#include <stdio.h>\n#include <stdlib.h>\n#define MAX_SIZE 100\n\nstruct Stack {\n    int items[MAX_SIZE];\n    int top;\n};\n\nvoid push(struct Stack* stack, int item) {\n    if (stack->top == MAX_SIZE - 1)\n        printf("Stack Overflow\\n");\n    else {\n        stack->top++;\n        stack->items[stack->top] = item;\n    }\n}\n\nint pop(struct Stack* stack) {\n    if (stack->top == -1) {\n        printf("Stack Underflow\\n");\n        return -1;\n    } else {\n        int item = stack->items[stack->top];\n        stack->top--;\n        return item;\n    }\n}\n\nint main() {\n    struct Stack* stack = (struct Stack*)malloc(sizeof(struct Stack));\n    stack->top = -1;\n    push(stack, 1);\n    push(stack, 2);\n    push(stack, 3);\n    printf("%d popped from stack\\n", pop(stack));\n    return 0;\n}`,
    'python': `class Stack:\n    def __init__(self):\n        self.items = []\n\n    def push(self, item):\n        self.items.append(item)\n\n    def pop(self):\n        if not self.items:\n            print("Stack Underflow")\n            return -1\n        return self.items.pop()\n\nstack = Stack()\nstack.push(1)\nstack.push(2)\nstack.push(3)\nprint(f"{stack.pop()} popped from stack")`
  },
  
  'queue': {
    'c': `#include <stdio.h>\n#include <stdlib.h>\n#define MAX_SIZE 100\n\nstruct Queue {\n    int items[MAX_SIZE];\n    int front, rear;\n};\n\nstruct Queue* createQueue() {\n    struct Queue* queue = (struct Queue*)malloc(sizeof(struct Queue));\n    queue->front = -1;\n    queue->rear = -1;\n    return queue;\n}\n\nvoid enqueue(struct Queue* queue, int value) {\n    if (queue->rear == MAX_SIZE - 1)\n        printf("Queue Overflow\\n");\n    else {\n        if (queue->front == -1)\n            queue->front = 0;\n        queue->rear++;\n        queue->items[queue->rear] = value;\n    }\n}\n\nint dequeue(struct Queue* queue) {\n    if (queue->front == -1) {\n        printf("Queue Underflow\\n");\n        return -1;\n    } else {\n        int item = queue->items[queue->front];\n        queue->front++;\n        if (queue->front > queue->rear)\n            queue->front = queue->rear = -1;\n        return item;\n    }\n}\n\nint main() {\n    struct Queue* queue = createQueue();\n    enqueue(queue, 1);\n    enqueue(queue, 2);\n    enqueue(queue, 3);\n    printf("%d dequeued from queue\\n", dequeue(queue));\n    return 0;\n}`,
    'python': `from collections import deque\n\nqueue = deque()\nqueue.append(1)\nqueue.append(2)\nqueue.append(3)\nprint(f"{queue.popleft()} dequeued from queue")`
  }
};


    function loadCode() {
      var categorySelect = document.getElementById('categorySelect');
      var selectedCategory = categorySelect.value;
      
      var cCodeTextarea = document.getElementById('cCodeTextarea');
      var pyCodeTextarea = document.getElementById('pyCodeTextarea');

      // Retrieve code examples based on selected category and language
      var cCodeExample = categories[selectedCategory]['c'];
      var pyCodeExample = categories[selectedCategory]['python'];

      // Set code examples to textareas
      cCodeTextarea.textContent = cCodeExample;
      pyCodeTextarea.textContent = pyCodeExample;

      // Apply Prism syntax highlighting
      Prism.highlightAll();
    }

    function copyCode(elementId) {
      var copyText = document.getElementById(elementId);
      var textArea = document.createElement("textarea");
      textArea.value = copyText.textContent;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      textArea.remove();
      alert("Code copied to clipboard");
    }

    // Initial load on page load
    loadCode();
