package Popyt.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Popyt.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;
import java.util.List;

/**
 * Entity implementation class for Entity: ПричинУвольн
 */
@Entity(name = "IISPopytПричинУвольн")
@Table(schema = "public", name = "ПричинУвольн")
public class PrichinUvoln {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ДатаЗаполн")
    private Date датазаполн;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Specialist")
    @Convert("Specialist")
    @Column(name = "Специалист", length = 16, unique = true, nullable = false)
    private UUID _specialistid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Specialist", insertable = false, updatable = false)
    private Specialist specialist;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "OcenPrichUvoln")
    @Convert("OcenPrichUvoln")
    @Column(name = "ОценПричУвольн", length = 16, unique = true, nullable = false)
    private UUID _ocenprichuvolnid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "OcenPrichUvoln", insertable = false, updatable = false)
    private OcenPrichUvoln ocenprichuvoln;

    @OneToMany(mappedBy = "prichinuvoln", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<Rekomendac> rekomendacs;


    public PrichinUvoln() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getДатаЗаполн() {
      return датазаполн;
    }

    public void setДатаЗаполн(Date датазаполн) {
      this.датазаполн = датазаполн;
    }


}