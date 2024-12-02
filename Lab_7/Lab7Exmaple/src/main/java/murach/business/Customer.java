package murach.business;

public class Customer {
    private int customerID;
    private String name;
    private String visaNumber;
    private String address;

    // Constructor without customerID
    public Customer(String name, String visaNumber, String address) {
        this.name = name;
        this.visaNumber = visaNumber;
        this.address = address;
    }

    // Constructor with customerID
    public Customer(int customerID, String name, String visaNumber, String address) {
        this.customerID = customerID;
        this.name = name;
        this.visaNumber = visaNumber;
        this.address = address;
    }

    // Getters and Setters
    public int getCustomerID() {
        return customerID;
    }

    public void setCustomerID(int customerID) {
        this.customerID = customerID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getVisaNumber() {
        return visaNumber;
    }

    public void setVisaNumber(String visaNumber) {
        this.visaNumber = visaNumber;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}
