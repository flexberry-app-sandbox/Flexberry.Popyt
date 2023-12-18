package Popyt.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Popyt.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Рекомендац
 */
@Entity(name = "IISPopytРекомендац")
@Table(schema = "public", name = "Рекомендац")
public class Rekomendac {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Руководители")
    private String руководители;

    @Column(name = "Специалисты")
    private String специалисты;

    @Column(name = "Рабочие")
    private String рабочие;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "PrichinUvoln")
    @Convert("PrichinUvoln")
    @Column(name = "ПричинУвольн", length = 16, unique = true, nullable = false)
    private UUID _prichinuvolnid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "PrichinUvoln", insertable = false, updatable = false)
    private PrichinUvoln prichinuvoln;


    public Rekomendac() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getРуководители() {
      return руководители;
    }

    public void setРуководители(String руководители) {
      this.руководители = руководители;
    }

    public String getСпециалисты() {
      return специалисты;
    }

    public void setСпециалисты(String специалисты) {
      this.специалисты = специалисты;
    }

    public String getРабочие() {
      return рабочие;
    }

    public void setРабочие(String рабочие) {
      this.рабочие = рабочие;
    }


}