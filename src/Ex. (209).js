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

// Ex. (209) - The general logic gate based on a map.

// References

// Paul A. Gagniuc. Coding Examples from Simple to Complex - Applications in Python, Springer, 2024, pp. 1-245.
// Paul A. Gagniuc. Coding Examples from Simple to Complex - Applications in MATLAB, Springer, 2024, pp. 1-255.
// Paul A. Gagniuc. Coding Examples from Simple to Complex - Applications in Javascript, Springer, 2024, pp. 1-240.
