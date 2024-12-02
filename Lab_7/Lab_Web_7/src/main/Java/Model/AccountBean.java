/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Model;

/**
 *
 * @author Admin
 */
import java.io.Serializable;

public class AccountBean implements Serializable {
    private String name;
    private String visaNumber;
    private String address;

    // Getters and setters for each field
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getVisaNumber() { return visaNumber; }
    public void setVisaNumber(String visaNumber) { this.visaNumber = visaNumber; }

    public String getAddress() { return address; }
    public void setAddress(String address) { this.address = address; }
}

