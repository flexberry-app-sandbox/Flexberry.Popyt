package Popyt.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Popyt.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Специалист
 */
@Entity(name = "IISPopytСпециалист")
@Table(schema = "public", name = "Специалист")
public class Specialist {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Номер")
    private Integer номер;

    @Column(name = "ЭлектрПочта")
    private String электрпочта;

    @Column(name = "ФИО")
    private String фио;

    @Column(name = "Телефон")
    private String телефон;


    public Specialist() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНомер() {
      return номер;
    }

    public void setНомер(Integer номер) {
      this.номер = номер;
    }

    public String getЭлектрПочта() {
      return электрпочта;
    }

    public void setЭлектрПочта(String электрпочта) {
      this.электрпочта = электрпочта;
    }

    public String getФИО() {
      return фио;
    }

    public void setФИО(String фио) {
      this.фио = фио;
    }

    public String getТелефон() {
      return телефон;
    }

    public void setТелефон(String телефон) {
      this.телефон = телефон;
    }


}