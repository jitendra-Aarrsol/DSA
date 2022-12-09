public class recursion {
    static void test(int values){
            System.out.println(values); //Head Recursion   
        if(values > 0){
            test(values - 1);
        }
        System.out.println("--------------------------");
        System.out.println(values); //Tail Recursion
    }
    public static void main(String arg[]){
        test(5);
    }
}
