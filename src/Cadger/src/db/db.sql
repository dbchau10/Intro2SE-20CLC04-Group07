create database cadgerdb;

create table account(
    username varchar(20),
    password varchar(20),
    name varchar(50),
    dob date,
    email varchar(30),
    phone char(10),
    gender bit,
    avatar varchar(50),
    primary key(username)
);

create table log(
    log_id serial,
    item_id int,
    borrower varchar(20),
    date date,
    primary key(log_id)
);

create table item(
    item_id serial,
    lender varchar(20),
    img varchar(50),
    description varchar(100),
    rating decimal(2,1),
    status bit,
    borrow_times smallint,
    primary key(item_id)
);

create table report(
    report_id serial,
    reason varchar(100),
    sender varchar(20),
    reported varchar(20),
    primary key(report_id)
);

create table borrowRequest(
    request_id serial,
    item_id int,
    borrower varchar(20),
    start_date date,
    end_date date,
    reason varchar(100),
    primary key(request_id)
);

create table notification(
    noti_id serial,
    content varchar(100),
    username varchar(20),
    primary key(noti_id)
);

create table return(
    return_id serial,
    item_id int,
    borrower varchar(20),
    date date,
    contact varchar(100),
    primary key(return_id)
);

create table rating(
    rating_id serial,
    item_id int,
    borrower int,
    point smallint,
    comment varchar(100),
    primary key(rating_id)
);