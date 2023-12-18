



CREATE TABLE "ПричинУвольн"
(

	"primaryKey" RAW(16) NOT NULL,

	"ДатаЗаполн" DATE NULL,

	"Специалист" RAW(16) NULL,

	"ОценПричУвольн" RAW(16) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Рекомендац"
(

	"primaryKey" RAW(16) NOT NULL,

	"Руководители" NVARCHAR2(255) NULL,

	"Специалисты" NVARCHAR2(255) NULL,

	"Рабочие" NVARCHAR2(255) NULL,

	"ПричинУвольн" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Специалист"
(

	"primaryKey" RAW(16) NOT NULL,

	"Номер" NUMBER(10) NULL,

	"ЭлектрПочта" NVARCHAR2(255) NULL,

	"ФИО" NVARCHAR2(255) NULL,

	"Телефон" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Анкеты"
(

	"primaryKey" RAW(16) NOT NULL,

	"ДатаЗаполн" DATE NULL,

	"ОтносКатСотр" NVARCHAR2(12) NULL,

	"КакойСтаж" NVARCHAR2(7) NULL,

	"ВозрастСотруд" NVARCHAR2(5) NULL,

	"Коммент" NVARCHAR2(255) NULL,

	"Специалист" RAW(16) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ОценПричУвольн"
(

	"primaryKey" RAW(16) NOT NULL,

	"НеУдовл" NVARCHAR2(13) NULL,

	"Удовл" NVARCHAR2(13) NULL,

	"Анкеты" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMNETLOCKDATA"
(

	"LockKey" NVARCHAR2(300) NOT NULL,

	"UserName" NVARCHAR2(300) NOT NULL,

	"LockDate" DATE NULL,

	 PRIMARY KEY ("LockKey")
) ;


CREATE TABLE "STORMSETTINGS"
(

	"primaryKey" RAW(16) NOT NULL,

	"Module" nvarchar2(1000) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"User" nvarchar2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMAdvLimit"
(

	"primaryKey" RAW(16) NOT NULL,

	"User" nvarchar2(255) NULL,

	"Published" NUMBER(1) NULL,

	"Module" nvarchar2(255) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"HotKeyData" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERSETTING"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMWEBSEARCH"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"Order" NUMBER(10) NOT NULL,

	"PresentView" nvarchar2(255) NOT NULL,

	"DetailedView" nvarchar2(255) NOT NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERDETAIL"
(

	"primaryKey" RAW(16) NOT NULL,

	"Caption" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	"ConnectMasterProp" nvarchar2(255) NOT NULL,

	"OwnerConnectProp" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERLOOKUP"
(

	"primaryKey" RAW(16) NOT NULL,

	"DataObjectType" nvarchar2(255) NOT NULL,

	"Container" nvarchar2(255) NULL,

	"ContainerTag" nvarchar2(255) NULL,

	"FieldsToView" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "UserSetting"
(

	"primaryKey" RAW(16) NOT NULL,

	"AppName" nvarchar2(256) NULL,

	"UserName" nvarchar2(512) NULL,

	"UserGuid" RAW(16) NULL,

	"ModuleName" nvarchar2(1024) NULL,

	"ModuleGuid" RAW(16) NULL,

	"SettName" nvarchar2(256) NULL,

	"SettGuid" RAW(16) NULL,

	"SettLastAccessTime" DATE NULL,

	"StrVal" nvarchar2(256) NULL,

	"TxtVal" CLOB NULL,

	"IntVal" NUMBER(10) NULL,

	"BoolVal" NUMBER(1) NULL,

	"GuidVal" RAW(16) NULL,

	"DecimalVal" NUMBER(20,10) NULL,

	"DateTimeVal" DATE NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ApplicationLog"
(

	"primaryKey" RAW(16) NOT NULL,

	"Category" nvarchar2(64) NULL,

	"EventId" NUMBER(10) NULL,

	"Priority" NUMBER(10) NULL,

	"Severity" nvarchar2(32) NULL,

	"Title" nvarchar2(256) NULL,

	"Timestamp" DATE NULL,

	"MachineName" nvarchar2(32) NULL,

	"AppDomainName" nvarchar2(512) NULL,

	"ProcessId" nvarchar2(256) NULL,

	"ProcessName" nvarchar2(512) NULL,

	"ThreadName" nvarchar2(512) NULL,

	"Win32ThreadId" nvarchar2(128) NULL,

	"Message" nvarchar2(2000) NULL,

	"FormattedMessage" nvarchar2(2000) NULL,

	 PRIMARY KEY ("primaryKey")
) ;



ALTER TABLE "ПричинУвольн"
	ADD CONSTRAINT "ПричинУвольн__3948" FOREIGN KEY ("Специалист") REFERENCES "Специалист" ("primaryKey");

CREATE INDEX "ПричинУвольн__7279" on "ПричинУвольн" ("Специалист");

ALTER TABLE "ПричинУвольн"
	ADD CONSTRAINT "ПричинУвольн__7393" FOREIGN KEY ("ОценПричУвольн") REFERENCES "ОценПричУвольн" ("primaryKey");

CREATE INDEX "ПричинУвольн__5491" on "ПричинУвольн" ("ОценПричУвольн");

ALTER TABLE "Рекомендац"
	ADD CONSTRAINT "Рекомендац_FП_9741" FOREIGN KEY ("ПричинУвольн") REFERENCES "ПричинУвольн" ("primaryKey");

CREATE INDEX "Рекомендац_IП_5666" on "Рекомендац" ("ПричинУвольн");

ALTER TABLE "Анкеты"
	ADD CONSTRAINT "Анкеты_FСпеци_9803" FOREIGN KEY ("Специалист") REFERENCES "Специалист" ("primaryKey");

CREATE INDEX "Анкеты_IСпеци_5751" on "Анкеты" ("Специалист");

ALTER TABLE "ОценПричУвольн"
	ADD CONSTRAINT "ОценПричУвол_9357" FOREIGN KEY ("Анкеты") REFERENCES "Анкеты" ("primaryKey");

CREATE INDEX "ОценПричУвол_2752" on "ОценПричУвольн" ("Анкеты");

ALTER TABLE "STORMWEBSEARCH"
	ADD CONSTRAINT "STORMWEBSEARCH_FSTORMFILT_6521" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERDETAIL"
	ADD CONSTRAINT "STORMFILTERDETAIL_FSTORMF_2900" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERLOOKUP"
	ADD CONSTRAINT "STORMFILTERLOOKUP_FSTORMF_1583" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");


