# The general logic gate based on a map

Ex. (209) - The general logic gate based on a map, is presented here in three programming languages: Python, MATLAB, and JavaScript. Although the implementations differ in syntax, the underlying concept remains identical across all three versions. Each code sample is reproduced from its respective volume of the series <i>Coding Examples from Simple to Complex</i> (Springer, 2024).
***

The previous example showed independent scattered functions for the logic gate functions. However, how about an optimization that makes a shortcut that melts all the previously described functions into one? Well, this code defines two 3×3 matrices a and b as well as an empty matrix c. It then performs bitwise logical operations between the corresponding elements of matrices a and b based on a specified operation code t using a function called g. The result of these operations is stored in matrix c. Next, it prints the contents of matrix c in a human-readable format. In detail, the matrices a and b are 3×3 arrays of binary values. The code initializes an empty matrix c, and two variables n and m to store the dimensions of matrix a. It also initializes an empty string r to store the formatted result. A nested for-loop is used to iterate through the elements of matrices a and b, perform the logical operation using the g function, and store the result in the matrix c. It also constructs a string r that represents the elements of matrix c separated by spaces and newlines. The g function takes three arguments: a, b, and t. It uses a predefined matrix h to perform bitwise logical operations based on the value of t and returns the result. The matrix h is a lookup table that specifies the results of different logical operations (AND, NAND, OR, NOR, XOR, XNOR) for different combinations of a and b. The code concludes by printing the string r, which represents the resulting matrix c. Additionally, there are comments in the code that explain the meanings of the values of t and provide a visual representation of the logical operations and their results in a tabular format.

## Example in Python:

```python
def g(a, b, t):
    h = [
        [0, 0, 0, 1, 0, 1, 0, 1],
        [0, 1, 0, 1, 1, 0, 1, 0],
        [1, 0, 0, 1, 1, 0, 1, 0],
        [1, 1, 1, 0, 1, 0, 0, 1]
        ]
    
    for i in range(len(h)):
        if a == h[i][0] and b == h[i][1]:
            return h[i][t + 1]

a = [
    [1, 1, 1],
    [0, 1, 0],
    [0, 1, 0]
    ]

b = [
    [0, 1, 0],
    [1, 1, 1],
    [0, 1, 0]
    ]

c = []
n = len(a)
m = len(a[0])
r = ''

for i in range(n):
    r += '\n'
    c.append([])
    for j in range(m):
        c[i].append(g(a[i][j], b[i][j], 6))
        r += str(c[i][j]) + " "

print(r)

'''
________________________________
|       |   | N |   |   |   | X |
| Input | A | A |   | N | X | N |
|       | N | N | O | O | O | O |
| a | b | D | D | R | R | R | R |
---------------------------------
| 0 | 0 | 0 | 1 | 0 | 1 | 0 | 1 |
| 0 | 1 | 0 | 1 | 1 | 0 | 1 | 0 |
| 1 | 0 | 0 | 1 | 1 | 0 | 1 | 0 |
| 1 | 1 | 1 | 0 | 1 | 0 | 0 | 1 |
---------------------------------
'''
``` 

```text
Python output:

0 1 0 
0 1 0 
1 1 1
```

## Example in Javascript:

```javascript
let a = [
        [1, 1, 1],
        [0, 1, 0],
        [0, 1, 0]
        ];

let b = [
        [0, 1, 0],
        [1, 1, 1],
        [0, 1, 0]
        ];

let c = [];
let n = a.length;
let m = a[0].length;
let r = '';

for(var i=0; i<n; i++) {
    r += '\n';
    c[i] = [];
    for(var j=0; j<m; j++) {
        c[i][j] = g(a[i][j], b[i][j], 6)
        r += c[i][j] + " ";
    }
}

print(r);

// A B
// t = 1 = AND
// t = 2 = NAND
// t = 3 = OR
// t = 4 = NOR
// t = 5 = XOR
// t = 6 = XNOR

function g(a, b, t){

    let h = [   // 1  2  3  4  5  6
            [0, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [1, 1, 1, 0, 1, 0, 0, 1]
            ];
    
    let n = h.length;
    
    for(let i=0; i<n; i++) {
        if(a == h[i][0] && b == h[i][1]) {
            return h[i][t+1];
        }
    }
}

/*
________________________________
|       |   | N |   |   |   | X |
| Input | A | A |   | N | X | N |
|       | N | N | O | O | O | O |
| a | b | D | D | R | R | R | R |
---------------------------------
| 0 | 0 | 0 | 1 | 0 | 1 | 0 | 1 |
| 0 | 1 | 0 | 1 | 1 | 0 | 1 | 0 |
| 1 | 0 | 0 | 1 | 1 | 0 | 1 | 0 |
| 1 | 1 | 1 | 0 | 1 | 0 | 0 | 1 |
---------------------------------

*/
```

```text
Javascript output:

0 1 0 
0 1 0 
1 1 1
```

## Example in Matlab:

```matlab
a = [
    [1, 1, 1];
    [0, 1, 0];
    [0, 1, 0]
    ];

b = [
    [0, 1, 0];
    [1, 1, 1];
    [0, 1, 0]
    ];

c = zeros(size(a));
n = size(a, 1);
m = size(a, 2);
r = '';

for i=1:n
    r = strcat(r, '\n');
    for j=1:m
        c(i,j) = g(a(i,j), b(i,j), 6);
        r = strcat(r, int2str(c(i,j)), " ");
    end
end

fprintf(r);

% A B
% t = 1 = AND
% t = 2 = NAND
% t = 3 = OR
% t = 4 = NOR
% t = 5 = XOR
% t = 6 = XNOR

function result = g(a, b, t)
    % Truth table
    h = [ % A  B  1  2  3  4  5  6
           [0, 0, 0, 1, 0, 1, 0, 1];
           [0, 1, 0, 1, 1, 0, 1, 0];
           [1, 0, 0, 1, 1, 0, 1, 0];
           [1, 1, 1, 0, 1, 0, 0, 1]
        ];
    
    n = size(h, 1);
    
    for i=1:n
        if a == h(i,1) && b == h(i,2)
            result = h(i,t+2);
            return;
        end
    end
end
 
%{
________________________________
|       |   | N |   |   |   | X |
| Input | A | A |   | N | X | N |
|       | N | N | O | O | O | O |
| a | b | D | D | R | R | R | R |
---------------------------------
| 0 | 0 | 0 | 1 | 0 | 1 | 0 | 1 |
| 0 | 1 | 0 | 1 | 1 | 0 | 1 | 0 |
| 1 | 0 | 0 | 1 | 1 | 0 | 1 | 0 |
| 1 | 1 | 1 | 0 | 1 | 0 | 0 | 1 |
---------------------------------
%}
```

```text
Matlab output:

0 1 0 
0 1 0 
1 1 1
```

## References

- <i>Paul A. Gagniuc. Coding Examples from Simple to Complex - Applications in Python, Springer, 2024, pp. 1-245.</i>
- <i>Paul A. Gagniuc. Coding Examples from Simple to Complex - Applications in MATLAB, Springer, 2024, pp. 1-255.</i>
- <i>Paul A. Gagniuc. Coding Examples from Simple to Complex - Applications in Javascript, Springer, 2024, pp. 1-240.</i>

***
