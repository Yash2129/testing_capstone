package com.wecp.medicalequipmentandtrackingsystem.entitiy;
 
 
import javax.persistence.*;
import java.util.Date;
 
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter 
public class Maintenance {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
 
    private Date scheduledDate;
    private Date completedDate;
    private String description;
 
    private String status;
 
    @ManyToOne(fetch = FetchType.EAGER)
    private Equipment equipment;
 
}
 