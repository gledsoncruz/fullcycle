use `nodedb`;
create table if not exists `tb_people`(
    `id` int(11) NOT NULL auto_increment,
    `name` varchar(100) NOT NULL,
    PRIMARY KEY  (`id`)
);

-- truncate table tb_people;
-- insert into tb_people (name) values ('De Arrascaeta');
-- insert into tb_people (name) values ('Bruno Herique');
-- commit;

