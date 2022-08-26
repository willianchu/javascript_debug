create table tabela(id integer, ref_id varchar(100));
insert into tabela(id, ref_id) values(23, "2,3,4"),(25, "5,6,7"),(23, "5,6,7");

select id, col01 as new_ref from

(select id, substring_index(ref_id,",",1) as "col01", 
substring_index(substring_index(ref_id,",",2), ",", -1) as "col02",
substring_index(ref_id,",",-1) as "col03"
from tabela) as tabela_aplitted

union all
select id, col02 as new_ref from

(select id, substring_index(ref_id,",",1) as "col01", 
substring_index(substring_index(ref_id,",",2), ",", -1) as "col02",
substring_index(ref_id,",",-1) as "col03"
from tabela) as tabela_aplitted

union all
select id, col03 as new_ref from

(select id, substring_index(ref_id,",",1) as "col01", 
substring_index(substring_index(ref_id,",",2), ",", -1) as "col02",
substring_index(ref_id,",",-1) as "col03"
from tabela) as tabela_aplitted

order by id
;