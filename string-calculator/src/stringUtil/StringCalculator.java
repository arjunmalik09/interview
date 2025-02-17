import java.util.ArrayList;

class StringCalculator {
    static ArrayList<Integer> parse(String numbers) {
        ArrayList<Integer> arr = new ArrayList<Integer>();
        if (numbers == "") return arr;
        ArrayList<String> numbersSplitted = new ArrayList<String>();
        for (String num: numbers.split("\n")) {
            numbersSplitted.add(num);
        }
        String delemiter = ",";
        if (numbersSplitted.size() > 0 && numbersSplitted.get(0).startsWith("//")) {
            String delemiterString = numbersSplitted.get(0);
            delemiter = delemiterString.substring(2, delemiterString.length());
            numbersSplitted.remove(delemiterString);
        }
        String[] nums = String.join(delemiter, numbersSplitted).split(delemiter);
        for (String num: nums) {
            Integer currentInteger = Integer.valueOf(num);
            if (currentInteger < 0) {
                String errorMessage = "negative numbers not allowed " + num;
                throw new IllegalArgumentException(errorMessage);
            }
            arr.add(currentInteger);
        }
        return arr;
    }
    public static int add(String numbers) {
        ArrayList<Integer> numbersArr = StringCalculator.parse(numbers);
        int result = 0;
        for (Integer num: numbersArr) {
            result += num;
        }
        return result;
    }
    public static void main(String[] args) {
        // Input: “”, Output: 0
        // Input: “1”, Output: 1
        // Input: “1,5”, Output: 6
        // Input: "1\n2,3" Output: 6
        // Input: "//;\n1;2" Output: "3"
        // Input: "//;\n1;-2" Output: exception: "negative numbers not allowed <negative_number>".
        boolean TestCase1 = StringCalculator.add("") == 0;
        boolean TestCase2 = StringCalculator.add("1") == 1;
        boolean TestCase3 = StringCalculator.add("1,5") == 6;
        boolean TestCase4 = StringCalculator.add("1\n2,3") == 6;
        boolean TestCase5 = StringCalculator.add("//;\n1;2") == 3;
        boolean TestCase6 = false;
        try {
            StringCalculator.add("//;\n1;-2");
        } catch (IllegalArgumentException e) {
            TestCase6 = (e.getMessage().equals("negative numbers not allowed -2"));
        }
        System.out.println("Testcases Result:");
        System.out.println("TestCase1: " + (TestCase1 ? "Pass": "Failed"));
        System.out.println("TestCase2: " + (TestCase2 ? "Pass": "Failed"));
        System.out.println("TestCase3: " + (TestCase3 ? "Pass": "Failed"));
        System.out.println("TestCase4: " + (TestCase4 ? "Pass": "Failed"));
        System.out.println("TestCase5: " + (TestCase5 ? "Pass": "Failed"));
        System.out.println("TestCase6: " + (TestCase6 ? "Pass": "Failed"));
    }
}
