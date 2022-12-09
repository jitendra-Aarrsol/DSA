// // TODO NOTE:- Program for array rotation


// // TODO Input: 
// // TODO arr[] = {1, 2, 3, 4, 5, 6, 7}, d = 2
// // TODO Output: 3 4 5 6 7 1 2

// // TODO Input: arr[] = {3, 4, 5, 6, 7, 1, 2}, d=2
// // TODO Output: 5 6 7 1 2 3 4  

// public class ArrayRotation {
//     static void Rotate(int arr[], int d, int n) {
//         // Storing rotated version of array
//         int temp[] = new int[n];

//         // Keeping track of the current index
//         // of temp[]
//         int k = 0;

//         // Storing the n - d elements of
//         // array arr[] to the front of temp[]
//         for (int i = d; i < n; i++) {
//             temp[k] = arr[i];
//             // System.out.print("temp " + temp[k] + "-----");
//             k++;
//         }
//         // System.out.println("k" + k);

//         // Storing the first d elements of array arr[]
//         // into temp
//         for (int i = 0; i < d; i++) {
//             temp[k] = arr[i];
//             // System.out.print("temp" + temp[k] + "*****");
//             k++;
//         }

//         // Copying the elements of temp[] in arr[]
//         // to get the final rotated array
//         for (int i = 0; i < n; i++) {
//             arr[i] = temp[i];
//             System.out.println("-----*****" + arr[i]);
//         }
//     }

//     // Function to print elements of array
//     static void PrintTheArray(int arr[], int n) {
//         for (int i = 0; i < n; i++) {
//             System.out.print(arr[i] + " ");
//         }
//     }

//     public static void main(String[] args) {
//         int arr[] = { 1, 2, 3, 4, 5, 6, 7 };
//         int N = arr.length;
//         int d = 2;

//         // Function calling
//         Rotate(arr, d, N);
//         // PrintTheArray(arr, N);
//     }
// }

// //! ALTERNATE METHOD TO IMPLEMENT THE ARRAY ROTATION
 
// class GFG {
     
//     public static void rotate(int arr[], int d, int n)
//     {
//         int p = 1;
//         while (p <= d) {
//             int last = arr[0];
//             for (int i = 0; i < n - 1; i++) {
//                 arr[i] = arr[i + 1];
//                 System.out.println("-----" + arr[i]);
//             }
//             System.out.println(n);
//             System.out.println("last" + last);
//             System.out.println("arr[n - 1]" + arr[n - 1]);
//             arr[n - 1] = last;
//             p++;
//         }
 
//         for (int i = 0; i < n; i++) {
//             System.out.print(arr[i] + " ");
//         }
//     }
     
//     public static void main(String[] args)
//     {
//         int arr[] = { 8, 9, 3, 4, 5, 6, 7 };
//         int N = arr.length;
//         // Rotate 2 times
//         int d = 2;
 
//         // Function call
//         rotate(arr, d, N);
//     }
// }

// Java program to rotate an array by
// d elements
class RotateArray {
    /*Function to left rotate arr[] of siz n by d*/
    void leftRotate(int arr[], int d, int n)
    {
        /* To handle if d >= n */
        d = d % n;
        int i, j, k, temp;
        int g_c_d = gcd(d, n);
        for (i = 0; i < g_c_d; i++) {
            /* move i-th values of blocks */
            temp = arr[i];
            j = i;
            while (true) {
                k = j + d;
                if (k >= n)
                    k = k - n;
                if (k == i)
                    break;
                arr[j] = arr[k];
                j = k;
            }
            arr[j] = temp;
        }
    }
 
    /*UTILITY FUNCTIONS*/
 
    /* function to print an array */
    void printArray(int arr[], int size)
    {
        int i;
        for (i = 0; i < size; i++)
            System.out.print(arr[i] + " ");
    }
 
    /*Function to get gcd of a and b*/
    int gcd(int a, int b)
    {
        if (b == 0)
            return a;
        else
            return gcd(b, a % b);
    }
 
    // Driver program to test above functions
    public static void main(String[] args)
    {
        RotateArray rotate = new RotateArray();
        int arr[] = { 1, 2, 3, 4, 5, 6, 7 };
        rotate.leftRotate(arr, 2, 7);
        rotate.printArray(arr, 7);
    }
}