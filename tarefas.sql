create database tarefas;

use tarefas;

create table clientes (
	id int primary key identity(1,1),
	nome varchar(100) not null
);

create table tarefas (
	id int primary key identity(1,1),
	id_cliente int not null foreign key references clientes(id),
	descricao varchar(200) not null,
);

insert into clientes (nome) values
('João'),
('Roberto'),
('Ana'),
('Emerson'),
('Lucia');

insert into tarefas (id_cliente, descricao) values
(1, 'Cortar a grama.'),
(1, 'Recolher o lixo.'),
(2, 'Passear com o cachorro.'),
(3, 'Preparar a apresentação.'),
(4, 'Cortar o cabelo.'),
(4, 'Pagar a conta.'),
(5, 'Terminar o relatório.');

alter table tarefas add
data_de_criacao date not null default getdate() with values;
