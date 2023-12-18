package Popyt.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Popyt.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ОценПричУвольн
 */
@Entity(name = "IISPopytОценПричУвольн")
@Table(schema = "public", name = "ОценПричУвольн")
public class OcenPrichUvoln {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "НеУдовл")
    private String неудовл;

    @Column(name = "Удовл")
    private String удовл;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Ankety")
    @Convert("Ankety")
    @Column(name = "Анкеты", length = 16, unique = true, nullable = false)
    private UUID _anketyid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Ankety", insertable = false, updatable = false)
    private Ankety ankety;


    public OcenPrichUvoln() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getНеУдовл() {
      return неудовл;
    }

    public void setНеУдовл(String неудовл) {
      this.неудовл = неудовл;
    }

    public String getУдовл() {
      return удовл;
    }

    public void setУдовл(String удовл) {
      this.удовл = удовл;
    }


}