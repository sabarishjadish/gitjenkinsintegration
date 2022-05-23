INDOSAT
   
   
   path
   
  - cd /opt/share/indosat153/newGIT/indosat.git.buffer/
  
  - /opt/PostgreSQL/9.5/bin/psql snoc2 postgres -f 1-release-scripts.sql &> 1-release-scripts.sql.log
  
  - cd /home/appuser/snoc/apps/logs/


KS

  path

  - cd /git/ks.snoc.uat.git/ks.snoc.git/
  
  - cd /opt/share/GIT/ks.snoc.git/
  
  
SQL File
     
   -  /opt/PostgreSQL/9.5/bin/psql snoc2 postgres -f 1-release-scripts.sql &> 1-release-scripts.sql.log
   
   -  password: postgres
   
   - cat filename
   
SQL FILE for ALTAN and IPOS

       - psql -U postgres snoc2 -f 1-release-scripts.sql &> 1-release-scripts.sql.log
		
ALTAN path
     
       	 
		- cd GIT/altan.snoc.git
		
		- psql -U postgres snoc2 -f 1-release-scripts.sql &> 1-release-scripts.sql.log


POS GERAI path
   
      
	  - cd /home/appuser/GIT/posgerai.snoc.git
	  
	  
	  
JS File


    - mongo admin -u admin -p admin --port 22020
	
    - dos2unix Masterdata.js     
	 
	-  mongo admin -u admin -p admin --port 22020 < oneTimeScript.js &> oneTimeScript.js.log
	
	
	
for mongo to start the server


        -  mongod --config=/etc/mongoconf/r01.config &
	
	


IPOS for UAT SERVER
 
10.34.57.241 - UI Server - appuser - App@2233!
10.34.57.243 - Service Server - appuser - App@2233!
10.34.57.242 - db server - mongo - Mongo@2233!

 
 
 This one is for Pre_prod

10.34.57.246 - UI Server - appuser - App@2233!
10.34.57.248 - Service Server - appuser - App@2233!
10.34.57.247 - db server - mongo - Mongo@2233!


To move UAT SERVER to Pre_prod in IPOS

     
	   - /home/appuser/git/posgerai.snoc.git/ master -f

ks sql File
   
       - cd /home/appuser/snoc/DB_Scripts/Postgres
	   
	   -  /opt/share/PostgreSQL/9.1/bin/psql snoc2 postgres -f kyivstar-fix.sql > kyivstar-fix.sql.log
	   
	   - /opt/share/PostgreSQL/9.1/bin/psql snoc2 postgres
	   
	   -  select * from kpi.tr_fetch_details;
	   
	   - \d+ kpi.tr_survey_summary_dtls;
	   
	   - select * from kpi.ms_survey_master order by 1 desc;
	   
	   - select * from kpi.ms_survey_details where survey_id_n = 1292;


IPOS
origin
appuser@65.2.90.153:/home/appuser/GIT/posgerai.snoc.git
C:\Users\USER\Downloads\snocnew.ppk

ALTAN
origin
appuser@65.1.246.31:/home/appuser/GIT/altan.snoc.git
C:\Users\USER\Downloads\altan.ppk

INDOSAT
origin
appuser@52.6.190.165:/opt/share/indosat153/newGIT/indosat.git.buffer
C:\Users\USER\Downloads\153PPK.ppk


KS
origin
appuser@54.152.54.77:/git/ks.snoc.uat.git/ks.snoc.git
C:\Users\USER\Downloads\ENH_LLC.ppk



