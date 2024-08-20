// --- Data for Data Structures and Sorting Algorithms ---
const dataStructuresData = [
  {
    name: "Array",
    access: "Θ(1)",
    search: "Θ(n)",
    insertion: "Θ(n)",
    deletion: "Θ(n)",
    spaceComplexity: "O(n)",
    codeExample: "python",
    code: `# Python example for array operations
my_array = [1, 2, 3, 4, 5]
print(my_array[0])  # Accessing an element at index 0
my_array.append(6)  # Adding an element to the end
`
  },
  {
    name: "Stack",
    access: "Θ(n)",
    search: "Θ(n)",
    insertion: "Θ(1)",
    deletion: "Θ(1)",
    spaceComplexity: "O(n)",
    codeExample: "python",
    code: `# Python example for stack using a list
stack = []
stack.append(1)
stack.append(2)
print(stack.pop())  # Output: 2 (Last-In-First-Out)
`
  },
  {
    name: "Queue",
    access: "Θ(n)",
    search: "Θ(n)",
    insertion: "Θ(1)",
    deletion: "Θ(1)",
    spaceComplexity: "O(n)",
    codeExample: "python",
    code: `# Python example for queue using a list with deque
from collections import deque
queue = deque()
queue.append(1)
queue.append(2)
print(queue.popleft())  # Output: 1 (First-In-First-Out)
`
  },
  {
    name: "Singly-Linked List",
    access: "Θ(n)",
    search: "Θ(n)",
    insertion: "Θ(1)",
    deletion: "Θ(1)",
    spaceComplexity: "O(n)",
    codeExample: "python",
    code: `# Python Example: Singly Linked List
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    # ... (methods for insertion, deletion, etc.)
`

  },
  {
    name: "Doubly-Linked List",
    access: "Θ(n)",
    search: "Θ(n)",
    insertion: "Θ(1)",
    deletion: "Θ(1)",
    spaceComplexity: "O(n)",
    codeExample: "python",
    code: `# Python Example: Doubly Linked List
class Node:
    def __init__(self, data):
        self.data = data
        self.prev = None
        self.next = None

class DoublyLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None

    # ... (methods for insertion, deletion, etc.)
`
  },
  {
    name: "Skip List",
    access: "Θ(log(n))",
    search: "Θ(log(n))",
    insertion: "Θ(log(n))",
    deletion: "Θ(log(n))",
    spaceComplexity: "O(n log(n))",
    codeExample: "python",
    code: `# Python Example: Skip List
class Node:
    def __init__(self, value, level):
        self.value = value
        self.forward = [None] * (level + 1)

class SkipList:
    def __init__(self, max_level):
        self.max_level = max_level
        self.head = Node(-1, max_level)

    # ... (methods for insertion, deletion, etc.)
`
  },
  {
    name: "Hash Table",
    access: "Θ(1)",
    search: "Θ(1)",
    insertion: "Θ(1)",
    deletion: "Θ(1)",
    spaceComplexity: "O(n)",
    codeExample: "python",
    code: `# Python example for Hash Table (using dictionaries)
my_dict = {}
my_dict["apple"] = 1
my_dict["banana"] = 2
print(my_dict["apple"])  # Accessing value associated with key "apple"
`
  },
  {
    name: "Binary Search Tree",
    access: "Θ(log(n))",
    search: "Θ(log(n))",
    insertion: "Θ(log(n))",
    deletion: "Θ(log(n))",
    spaceComplexity: "O(n)",
    codeExample: "python",
    code: `# Python Example: Binary Search Tree
class Node:
    def __init__(self, key):
        self.left = None
        self.right = None
        self.val = key

class BST:
    def __init__(self):
        self.root = None

    # ... (methods for insertion, deletion, etc.)
`
  },
  {
    name: "Cartesian Tree",
    access: "Θ(log(n))",
    search: "Θ(log(n))",
    insertion: "Θ(log(n))",
    deletion: "Θ(log(n))",
    spaceComplexity: "O(n)",
    codeExample: "python",
    code: `# Python Example: Cartesian Tree
class Node:
    def __init__(self, key):
        self.left = None
        self.right = None
        self.val = key

class CartesianTree:
    def __init__(self):
        self.root = None

    # ... (methods for insertion, deletion, etc.)
`
  },
  {
    name: "B-Tree",
    access: "Θ(log(n))",
    search: "Θ(log(n))",
    insertion: "Θ(log(n))",
    deletion: "Θ(log(n))",
    spaceComplexity: "O(n)",
    codeExample: "python",
    code: `# Python Example: B-Tree
class BTreeNode:
    def __init__(self, t, leaf=False):
        self.t = t
        self.leaf = leaf
        self.keys = []
        self.children = []

class BTree:
    def __init__(self, t):
        self.root = BTreeNode(t, True)
        self.t = t

    # ... (methods for insertion, deletion, etc.)
`
  },
  {
    name: "Red-Black Tree",
    access: "Θ(log(n))",
    search: "Θ(log(n))",
    insertion: "Θ(log(n))",
    deletion: "Θ(log(n))",
    spaceComplexity: "O(n)",
    codeExample: "python",
    code: `# Python Example: Red-Black Tree
class Node:
    def __init__(self, data):
        self.data = data
        self.color = 'red'
        self.left = None
        self.right = None
        self.parent = None

class RedBlackTree:
    def __init__(self):
        self.TNULL = Node(0)
        self.TNULL.color = 'black'
        self.root = self.TNULL

`
  },
  {
    name: "Splay Tree",
    access: "Θ(log(n))",
    search: "Θ(log(n))",
    insertion: "Θ(log(n))",
    deletion: "Θ(log(n))",
    spaceComplexity: "O(n)",
    codeExample: "python",
    code: `# Python Example: Splay Tree
class Node:
    def __init__(self, key):
        self.key = key
        self.left = None
        self.right = None

class SplayTree:
    def __init__(self):
        self.root = None

    # ... (methods for insertion, deletion, etc.)
`
  },
  {
    name: "AVL Tree",
    access: "Θ(log(n))",
    search: "Θ(log(n))",
    insertion: "Θ(log(n))",
    deletion: "Θ(log(n))",
    spaceComplexity: "O(n)",
    codeExample: "python",
    code: `# Python Example: AVL Tree
class Node:
    def __init__(self, key):
        self.key = key
        self.left = None
        self.right = None
        self.height = 1

class AVLTree:
    def __init__(self):
        self.root = None

    # ... (methods for insertion, deletion, etc.)
`
  },
  {
    name: "KD Tree",
    access: "Θ(log(n))",
    search: "Θ(log(n))",
    insertion: "Θ(log(n))",
    deletion: "Θ(log(n))",
    spaceComplexity: "O(n)",
    codeExample: "python",
    code: `# Python Example: KD Tree
class Node:
    def __init__(self, point, axis):
        self.point = point
        self.left = None
        self.right = None
        self.axis = axis

class KDTree:
    def __init__(self):
        self.root = None

    # ... (methods for insertion, deletion, etc.)
`
  }
];

const sortingAlgorithmsData = [
  {
    name: "Quicksort",
    best: "Ω(n log(n))",
    average: "Θ(n log(n))",
    worst: "O(n^2)",
    spaceComplexity: "O(log(n))",
    codeExample: "python",
    code: `def quicksort(arr):
    if len(arr) < 2:
        return arr
    pivot = arr[0]
    less = [i for i in arr[1:] if i <= pivot]
    greater = [i for i in arr[1:] if i > pivot]
    return quicksort(less) + [pivot] + quicksort(greater)
`
  },
  {
    name: "Mergesort",
    best: "Ω(n log(n))",
    average: "Θ(n log(n))",
    worst: "O(n log(n))",
    spaceComplexity: "O(n)",
    codeExample: "python",
    code: `def mergesort(arr):
    if len(arr) > 1:
        mid = len(arr) // 2
        left_half = arr[:mid]
        right_half = arr[mid:]
        mergesort(left_half)
        mergesort(right_half)
        i = j = k = 0
        while i < len(left_half) and j < len(right_half):
            if left_half[i] < right_half[j]:
                arr[k] = left_half[i]
                i += 1
            else:
                arr[k] = right_half[j]
                j += 1
            k += 1
        while i < len(left_half):
            arr[k] = left_half[i]
            i += 1
            k += 1
        while j < len(right_half):
            arr[k] = right_half[j]
            j += 1
            k += 1
`
  },
  {
    name: "Timsort",
    best: "Ω(n)",
    average: "Θ(n log(n))",
    worst: "O(n log(n))",
    spaceComplexity: "O(n)",
    codeExample: "python",
    code: `def timsort(arr):
    arr.sort()
    return arr
`
  },
  {
    name: "Heapsort",
    best: "Ω(n log(n))",
    average: "Θ(n log(n))",
    worst: "O(n log(n))",
    spaceComplexity: "O(1)",
    codeExample: "python",
    code: `def heapify(arr, n, i):
    largest = i
    l = 2 * i + 1
    r = 2 * i + 2
    if l < n and arr[i] < arr[l]:
        largest = l
    if r < n and arr[largest] < arr[r]:
        largest = r
    if largest != i:
        arr[i], arr[largest] = arr[largest], arr[i]
        heapify(arr, n, largest)

def heap_sort(arr):
    n = len(arr)
    for i in range(n // 2 - 1, -1, -1):
        heapify(arr, n, i)
    for i in range(n-1, 0, -1):
        arr[i], arr[0] = arr[0], arr[i]
        heapify(arr, i, 0)
`
  },
  {
    name: "Bubble Sort",
    best: "Ω(n)",
    average: "Θ(n^2)",
    worst: "O(n^2)",
    spaceComplexity: "O(1)",
    codeExample: "python",
    code: `def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        swapped = False
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
                swapped = True
        if not swapped:
            break
`
  },
  {
    name: "Insertion Sort",
    best: "Ω(n)",
    average: "Θ(n^2)",
    worst: "O(n^2)",
    spaceComplexity: "O(1)",
    codeExample: "python",
    code: `def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and key < arr[j]:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key
`
  },
  {
    name: "Selection Sort",
    best: "Ω(n^2)",
    average: "Θ(n^2)",
    worst: "O(n^2)",
    spaceComplexity: "O(1)",
    codeExample: "python",
    code: `def selection_sort(arr):
    for i in range(len(arr)):
        min_idx = i
        for j in range(i+1, len(arr)):
            if arr[j] < arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
`
  },
  {
    name: "Tree Sort",
    best: "Ω(n log(n))",
    average: "Θ(n log(n))",
    worst: "O(n^2)",
    spaceComplexity: "O(n)",
    codeExample: "python",
    code: `def tree_sort(arr):
    if not arr:
        return []
    bst = BST()
    for num in arr:
        bst.insert(num)
    return bst.inorder()
`
  },
  {
    name: "Shell Sort",
    best: "Ω(n log(n))",
    average: "Θ(n(log(n))^2)",
    worst: "O(n(log(n))^2)",
    spaceComplexity: "O(1)",
    codeExample: "python",
    code: `def shell_sort(arr):
    n = len(arr)
    gap = n // 2
    while gap > 0:
        for i in range(gap, n):
            temp = arr[i]
            j = i
            while j >= gap and arr[j - gap] > temp:
                arr[j] = arr[j - gap]
                j -= gap
            arr[j] = temp
        gap //= 2
`
  },
  {
    name: "Bucket Sort",
    best: "Ω(n+k)",
    average: "Θ(n+k)",
    worst: "O(n^2)",
    spaceComplexity: "O(n)",
    codeExample: "python",
    code: `def bucket_sort(arr):
    if len(arr) == 0:
        return arr
    bucket = []
    for i in range(len(arr)):
        bucket.append([])
    for j in arr:
        index_b = int(10 * j)
        bucket[index_b].append(j)
    for i in range(len(arr)):
        bucket[i] = sorted(bucket[i])
    k = 0
    for i in range(len(arr)):
        for j in range(len(bucket[i])):
            arr[k] = bucket[i][j]
            k += 1
    return arr
`
  },
  {
    name: "Radix Sort",
    best: "Ω(nk)",
    average: "Θ(nk)",
    worst: "O(nk)",
    spaceComplexity: "O(n+k)",
    codeExample: "python",
    code: `def counting_sort(arr, exp1):
    n = len(arr)
    output = [0] * (n)
    count = [0] * (10)
    for i in range(0, n):
        index = arr[i] // exp1
        count[index % 10] += 1
    for i in range(1, 10):
        count[i] += count[i - 1]
    i = n - 1
    while i >= 0:
        index = arr[i] // exp1
        output[count[index % 10] - 1] = arr[i]
        count[index % 10] -= 1
        i -= 1
    for i in range(0, len(arr)):
        arr[i] = output[i]

def radix_sort(arr):
    max1 = max(arr)
    exp = 1
    while max1 // exp > 0:
        counting_sort(arr, exp)
        exp *= 10
`
  },
  {
    name: "Counting Sort",
    best: "Ω(n+k)",
    average: "Θ(n+k)",
    worst: "O(n+k)",
    spaceComplexity: "O(k)",
    codeExample: "python",
    code: `def counting_sort(arr):
    max_val = max(arr)
    m = max_val + 1
    count = [0] * m
    for a in arr:
        count[a] += 1
    i = 0
    for a in range(m):
        for c in range(count[a]):
            arr[i] = a
            i += 1
    return arr
`
  },
  {
    name: "Cubesort",
    best: "Ω(n)",
    average: "Θ(n log(n))",
    worst: "O(n log(n))",
    spaceComplexity: "O(n)",
    codeExample: "python",
    code: `def cubesort(arr):
    arr.sort()
    return arr
`
  }
];

// --- Quiz Data ---
const quizQuestions = [
  {
    question: "What is the time complexity of searching for an element in a sorted array using binary search?",
    answers: ["O(log n)", "O(n)", "O(1)"],
    correctAnswer: 0 // Index of the correct answer
  },
  {
    question: "Which data structure uses a Last-In-First-Out (LIFO) approach?",
    answers: ["Queue", "Stack", "Linked List", "Tree"],
    correctAnswer: 1 // Index of the correct answer
  },
  {
    question: "What is the space complexity of a hash table?",
    answers: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
    correctAnswer: 1 // Index of the correct answer
  },
  {
    question: "Which sorting algorithm has the best average-case time complexity?",
    answers: ["Quicksort", "Mergesort", "Heapsort", "Bubble Sort"],
    correctAnswer: 1 // Index of the correct answer
  },
  {
    question: "What is the time complexity of inserting an element into a binary search tree?",
    answers: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: 1 // Index of the correct answer
  },
  {
    question: "Which data structure is used for breadth-first search (BFS)?",
    answers: ["Stack", "Queue", "Linked List", "Tree"],
    correctAnswer: 1 // Index of the correct answer
  },
  {
    question: "What is the worst-case time complexity of quicksort?",
    answers: ["O(n log n)", "O(n^2)", "O(n)", "O(log n)"],
    correctAnswer: 1 // Index of the correct answer
  },
  {
    question: "Which data structure is best for implementing a priority queue?",
    answers: ["Array", "Linked List", "Heap", "Stack"],
    correctAnswer: 2 // Index of the correct answer
  },
  {
    question: "What is the time complexity of accessing an element in an array by index?",
    answers: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
    correctAnswer: 0 // Index of the correct answer
  },
  {
    question: "Which algorithm is used to find the shortest path in a graph?",
    answers: ["Depth-First Search", "Breadth-First Search", "Dijkstra's Algorithm", "Kruskal's Algorithm"],
    correctAnswer: 2 // Index of the correct answer
  }
];

// --- Helper Functions for Dynamic Content ---

// Function to create a table row (Corrected)
function createTableRow(data, isSortingAlgorithm = false) {
  const row = document.createElement("tr");

  if (isSortingAlgorithm) { // Sorting Algorithm Row
    for (const key of ["name", "best", "average", "worst", "spaceComplexity"]) {
      const cell = document.createElement("td");
      cell.textContent = data[key];
      row.appendChild(cell);
    }

    // Code example cell (add syntax highlighting later)
    const codeCell = document.createElement("td");
    const pre = document.createElement("pre");
    pre.classList.add("code");
    pre.textContent = data["code"];
    codeCell.appendChild(pre);
    row.appendChild(codeCell);

  } else { // Data Structure Row
    for (const key of ["name", "access", "search", "insertion", "deletion", "spaceComplexity"]) {
      const cell = document.createElement("td");
      cell.textContent = data[key];
      row.appendChild(cell);
    }
  }

  return row;
}

// Function to populate a table with data
function populateTable(tableId, data, isSortingAlgorithm = false) {
  const tableBody = document.getElementById(tableId).querySelector("tbody");
  tableBody.innerHTML = ""; // Clear existing content

  data.forEach(item => {
    const row = createTableRow(item, isSortingAlgorithm);
    tableBody.appendChild(row);
  });
}

// --- Functions for Search and Filter ---

// Function to filter table data based on search and complexity
function filterTableData(tableData, searchInputId, complexitySelectId) {
  const searchTerm = document.getElementById(searchInputId).value.toLowerCase();
  const selectedComplexity = document.getElementById(complexitySelectId).value.toLowerCase();

  return tableData.filter(item => {
    const nameMatch = item.name.toLowerCase().includes(searchTerm);
    let complexityMatch = true;
    if (selectedComplexity) {
      complexityMatch = Object.values(item).some(value =>
        value ? value.toLowerCase().includes(selectedComplexity) : false
      );
    }
    return nameMatch && complexityMatch;
  });
}

// Function to attach event listeners to search and filter controls
function setupSearchAndFilter(tableData, tableId, searchInputId, complexitySelectId, isSortingAlgorithm = false) {
  document.getElementById(searchInputId).addEventListener("input", () => {
    const filteredData = filterTableData(tableData, searchInputId, complexitySelectId);
    populateTable(tableId, filteredData, isSortingAlgorithm);
  });

  document.getElementById(complexitySelectId).addEventListener("change", () => {
    const filteredData = filterTableData(tableData, searchInputId, complexitySelectId);
    populateTable(tableId, filteredData, isSortingAlgorithm);
  });
}

// --- Quiz Functionality ---

let currentQuestionIndex = 0;
let score = 0;

// Function to create quiz question elements
function createQuizQuestion(questionData, questionNumber) {
  const questionDiv = document.createElement("div");
  questionDiv.classList.add("question");
  questionDiv.innerHTML = `
    <p>${questionNumber}. ${questionData.question}</p>
    <div class="answers"></div>
  `;

  const answersDiv = questionDiv.querySelector(".answers");
  questionData.answers.forEach((answer, index) => {
    const answerButton = document.createElement("button");
    answerButton.classList.add("answer");
    answerButton.textContent = answer;
    answerButton.setAttribute("data-correct", index === questionData.correctAnswer);
    answerButton.addEventListener("click", checkAnswer);
    answersDiv.appendChild(answerButton);
  });

  return questionDiv;
}

// Function to check the selected answer
function checkAnswer(event) {
  const selectedAnswer = event.target;
  const isCorrect = selectedAnswer.getAttribute("data-correct") === "true";

  // Provide feedback (you can style this further with CSS)
  if (isCorrect) {
    selectedAnswer.classList.add("correct");
    score++;
  } else {
    selectedAnswer.classList.add("incorrect");
  }

  // Disable further selections for the answered question
  const answersDiv = selectedAnswer.parentNode;
  answersDiv.querySelectorAll(".answer").forEach(button => {
    button.disabled = true;
  });

  // Show next question button
  const nextQuestionButton = document.getElementById("next-question");
  if (nextQuestionButton) {
    nextQuestionButton.style.display = "block";
  } else {
    console.error("Element with ID 'next-question' not found.");
  }
}

// Function to show the next question
function showNextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizQuestions.length) {
    displayQuestion(currentQuestionIndex);
  } else {
    displayFinalScore();
  }
}

// Function to display a question
function displayQuestion(index) {
  const quizContainer = document.getElementById("quiz-container");
  quizContainer.innerHTML = ""; // Clear any previous content
  const questionElement = createQuizQuestion(quizQuestions[index], index + 1);
  quizContainer.appendChild(questionElement);

  // Hide next question button initially
  const nextQuestionButton = document.getElementById("next-question");
  if (nextQuestionButton) {
    nextQuestionButton.style.display = "none";
  } else {
    console.error("Element with ID 'next-question' not found.");
  }
}

// Function to display the final score
function displayFinalScore() {
  const quizContainer = document.getElementById("quiz-container");
  quizContainer.innerHTML = `
    <p>Your final score is ${score} out of ${quizQuestions.length}</p>
    <button id="try-again">Try Again</button>
  `;

  const tryAgainButton = document.getElementById("try-again");
  if (tryAgainButton) {
    tryAgainButton.addEventListener("click", populateQuiz);
  } else {
    console.error("Element with ID 'try-again' not found.");
  }
}

// Function to populate the quiz container
function populateQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  displayQuestion(currentQuestionIndex);
}

// Initialize the quiz
document.addEventListener("DOMContentLoaded", () => {
  populateQuiz();
  const nextQuestionButton = document.getElementById("next-question");
  if (nextQuestionButton) {
    nextQuestionButton.addEventListener("click", showNextQuestion);
  } else {
    console.error("Element with ID 'next-question' not found.");
  }
});
// --- Chart.js Functionality ---

// Get the canvas element (make sure the ID matches your HTML)
const complexityChartCanvas = document.getElementById("complexityChart").getContext("2d");
let complexityChart; // Declare a variable to store the chart instance

// Initial Chart Data (you'll update this dynamically)
let chartData = {
  labels: [], // Start with empty labels
  datasets: [] // Start with empty datasets
};

// Chart.js Configuration Options
const chartOptions = {
  responsive: true,
  maintainAspectRatio: true,
  interaction: {
    mode: 'index',
    intersect: false
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Input Size (n)'
      }
    },
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: 'Time/Space Complexity'
      }
    }
  },
  plugins: {
    title: {
      display: true,
      text: 'Big-O Complexity Visualizations'
    },
    legend: {
      position: 'bottom',
      labels: {
        boxWidth: 12,
        font: {
          size: 14
        }
      }
    },
    tooltip: {
      enabled: true,
      mode: 'index',
      intersect: false
    }
  }
};

// Function to create/update the Chart.js chart
function updateComplexityChart() {
  // Destroy the previous chart instance if it exists
  if (complexityChart) {
    complexityChart.destroy();
  }

  // Create a new chart instance
  complexityChart = new Chart(complexityChartCanvas, {
    type: document.getElementById("chartTypeSelect").value,
    data: chartData,
    options: chartOptions
  });
}

// Function to generate chart data based on user selections
function generateChartData() {
  // 1. Get user selections (chart type, input size, complexities)
  const chartType = document.getElementById("chartTypeSelect").value;
  const inputSize = parseInt(document.getElementById("inputSizeRange").value);
  const selectedComplexities = Array.from(document.querySelectorAll('input[name="complexity"]:checked')).map(checkbox => checkbox.value);

  // 2. Generate chart labels (input sizes)
  const labels = [];
  for (let i = 1; i <= inputSize; i *= 10) {
    labels.push(i.toString());
  }

  // 3. Generate datasets based on selected complexities
  const datasets = selectedComplexities.map(complexity => {
    let data = [];
    switch (complexity) {
      case 'O(1)':
        data = labels.map(() => 1);
        break;
      case 'O(log n)':
        data = labels.map(n => Math.log2(parseInt(n)));
        break;
      case 'O(n)':
        data = labels.map(n => parseInt(n));
        break;
      case 'O(n log n)':
        data = labels.map(n => parseInt(n) * Math.log2(parseInt(n)));
        break;
      case 'O(n^2)':
        data = labels.map(n => Math.pow(parseInt(n), 2));
        break;
      case 'O(2^n)':
        data = labels.map(n => Math.pow(2, parseInt(n)));
        break;
      case 'O(n!)':
        data = labels.map(n => factorial(parseInt(n)));
        break;
      default:
        data = labels.map(() => 0); // Default to zero for invalid/unhandled complexities
    }

    return {
      label: complexity,
      data: data,
      borderColor: getComplexityColor(complexity), // Get color based on complexity
      borderWidth: 2,
      fill: false // Optional: You can fill the area under the line if needed
    };
  });

  // 4. Update the chartData object
  chartData = {
    labels: labels,
    datasets: datasets
  };

  // 5. Update the chart
  updateComplexityChart();
}

// Helper function to calculate factorial
function factorial(n) {
  if (n < 0) return undefined; // Factorial is not defined for negative numbers
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Helper function to get color based on complexity
function getComplexityColor(complexity) {
  const colors = {
    'O(1)': '#FF0000',
    'O(log n)': '#00FF00',
    'O(n)': '#0000FF',
    'O(n log n)': '#FFFF00',
    'O(n^2)': '#FF00FF',
    'O(2^n)': '#00FFFF',
    'O(n!)': '#FFA500'
  };
  return colors[complexity] || '#000000'; // Default to black if complexity not found
}

// Event listeners for chart controls
document.getElementById("chartTypeSelect").addEventListener("change", generateChartData);
document.getElementById("inputSizeRange").addEventListener("input", generateChartData);
document.querySelectorAll('input[name="complexity"]').forEach(checkbox => {
  checkbox.addEventListener("change", generateChartData);
});

// --- Event Listeners for Theme Toggle (You might already have this) ---
const themeToggle = document.getElementById("theme-toggle");
const themeLabel = document.getElementById("theme-label");
const body = document.body;

const setTheme = (theme) => {
  body.classList.toggle("dark-mode", theme === "dark");
  themeLabel.textContent = theme === "dark" ? "Light Mode" : "Dark Mode";
  localStorage.setItem("theme", theme);
};

const savedTheme = localStorage.getItem("theme") || "light";
setTheme(savedTheme);

themeToggle.addEventListener("click", () => {
  const newTheme = body.classList.contains("dark-mode") ? "light" : "dark";
  setTheme(newTheme);
});

// --- Initialize the application ---
populateTable("data-structures-table", dataStructuresData);
populateTable("sorting-algorithms-table", sortingAlgorithmsData, true);
setupSearchAndFilter(dataStructuresData, "data-structures-table", "search-data-structures", "filter-data-structures-complexity");
setupSearchAndFilter(sortingAlgorithmsData, "sorting-algorithms-table", "search-sorting-algorithms", "filter-sorting-algorithms-complexity", true);
populateQuiz();
generateChartData(); // Generate initial chart data
