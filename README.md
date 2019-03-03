# Adding A-Z filter for Databases search on Primo VE 

you can see it in the link: https://technion.primo.exlibrisgroup.com/discovery/dbsearch?sortby=rank&vid=972TEC_INST:972TEC_V1&lang=en

![image](https://user-images.githubusercontent.com/47715986/53693495-ed35bc80-3da9-11e9-8875-0ae44dbaab4d.png)

On November 2018 ExLibris release the option of assigning categories to the database records. This feature allows the institute to add a list of subjects in order to improve databases accessibility. 
We have created an A-Z listing plug-in for this list to ease navigation due to a very long list of subjects in our various databases.
**To implement this plug-in in Primo VE please follow these stages:**
1.	Assigning Categories to the Database Records (From Ex Libris documentation):
Choose a local bibliographic field (for example, select any 6XX or 9XX field for MARC21) in which to store the database categories in your local bibliographic records, and then enter that field in the **db_categories_field** parameter on the Alma Customer Parameters page 

![image](https://user-images.githubusercontent.com/47715986/53693140-b1e4bf00-3da4-11e9-9034-676d60daa737.png)

**Configuration Menu > Resources > General > Other Settings**

You can choose to use a subject field as 650 (LCSH, MeSH) or add any subject on field 693 for a local subject using the Metadata Editor (Resources > Cataloging > Open Metadata Editor)

![image](https://user-images.githubusercontent.com/47715986/53693147-e0fb3080-3da4-11e9-823f-9bee753edd08.png)

For more info:
https://knowledge.exlibrisgroup.com/Primo/Release_Notes/002Primo_VE/0982018/0052018_Release_Notes_for_Primo_VE


2.	Contact ExLibris by ticket and request to run the job: **Create BD Categories File** (Currently only ExLibris can run this job). This job is schedule to run daily
 
3.	**(---Optional ---)** Some of the categories labels need to be customized to be 
presented correctly: 

![image](https://user-images.githubusercontent.com/47715986/53693157-1b64cd80-3da5-11e9-8549-6b24f7cc528f.png)  ![image](https://user-images.githubusercontent.com/47715986/53693158-27e92600-3da5-11e9-9d96-3104a12a245b.png)

The fix: 
On **Discovery layer > Labels > Database Search Labels table** (in edit mode).
Add Row with code and new label (code is taken from translate by inspect).

**Example:** 
Primo Front-end:
 
Web Browser Inspect: 

![image](https://user-images.githubusercontent.com/47715986/53693168-5c5ce200-3da5-11e9-9f51-da4440e9f8e2.png)

Alma (Add row) and Save table:

![image](https://user-images.githubusercontent.com/47715986/53693177-81e9eb80-3da5-11e9-94fe-6b3cb900dcc7.png)

4.	Assuming you've installed and are using primo-explore-devenv download primo-explore-filter-data-base-by-category-search and follow the instruction for development in:
https://github.com/ExLibrisGroup/primo-explore-devenv

**Provided with love to the Primo community by the Technion Libraries.**
