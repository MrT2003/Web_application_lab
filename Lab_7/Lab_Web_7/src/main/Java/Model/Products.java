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

public class Products implements Serializable {
    private int productID;
    private String manufacturer;
    private String country;
    private double price;

    public Products(int productID, String manufacturer, String country, double price) {
        this.productID = productID;
        this.manufacturer = manufacturer;
        this.country = country;
        this.price = price;
    }

    // Getters and setters
    public int getProductID() { return productID; }
    public void setProductID(int productID) { this.productID = productID; }

    public String getManufacturer() { return manufacturer; }
    public void setManufacturer(String manufacturer) { this.manufacturer = manufacturer; }

    public String getCountry() { return country; }
    public void setCountry(String country) { this.country = country; }

    public double getPrice() { return price; }
    public void setPrice(double price) { this.price = price; }
}

