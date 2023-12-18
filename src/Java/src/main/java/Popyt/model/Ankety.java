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
 * Entity implementation class for Entity: Анкеты
 */
@Entity(name = "IISPopytАнкеты")
@Table(schema = "public", name = "Анкеты")
public class Ankety {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ДатаЗаполн")
    private Date датазаполн;

    @Column(name = "ОтносКатСотр")
    private String относкатсотр;

    @Column(name = "КакойСтаж")
    private String какойстаж;

    @Column(name = "ВозрастСотруд")
    private String возрастсотруд;

    @Column(name = "Коммент")
    private String коммент;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Specialist")
    @Convert("Specialist")
    @Column(name = "Специалист", length = 16, unique = true, nullable = false)
    private UUID _specialistid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Specialist", insertable = false, updatable = false)
    private Specialist specialist;

    @OneToMany(mappedBy = "ankety", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<OcenPrichUvoln> ocenprichuvolns;


    public Ankety() {
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

    public String getОтносКатСотр() {
      return относкатсотр;
    }

    public void setОтносКатСотр(String относкатсотр) {
      this.относкатсотр = относкатсотр;
    }

    public String getКакойСтаж() {
      return какойстаж;
    }

    public void setКакойСтаж(String какойстаж) {
      this.какойстаж = какойстаж;
    }

    public String getВозрастСотруд() {
      return возрастсотруд;
    }

    public void setВозрастСотруд(String возрастсотруд) {
      this.возрастсотруд = возрастсотруд;
    }

    public String getКоммент() {
      return коммент;
    }

    public void setКоммент(String коммент) {
      this.коммент = коммент;
    }


}