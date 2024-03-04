  export class GlobalConstants {
    //Message
    public static genericError: string =
      'Something went wrong. Please try again alter';

    public static genericSuccess: string = 'Successfully created';

    public static unauthroized: string = 'You are not unauthroized person to access this page';

    public static productExistsError: string = "Product alrealy exists";

    public static productAdded: string = "Product added Successfully";
    
    //Regex
    public static nameRegex: string = '[a-zA-Z0-9 ]*';

    public static emailRegex: string =
      '[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}';

    public static contactNumberRegex: string = '^[0-9]{10}$';

    //Variable
    public static error: string = 'error';
  }
