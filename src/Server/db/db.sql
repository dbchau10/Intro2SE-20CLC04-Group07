-- create database cadgerdb;
-- \c cadgerdb
create table account(
    username varchar(20),
    password varchar(20),
    name varchar(50),
    dob date,
    email varchar(30),
    phone varchar(11),
    gender char(1),
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
    name varchar(50),
    lender varchar(20),
    img varchar(50),
    description varchar(100),
    rating decimal(2,1),
    status smallint,
    borrow_times int,
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

create table itemRating(
    rating_id serial,
    item_id int,
    borrower varchar(20),
    point smallint,
    comment varchar(100),
    date date,
    primary key(rating_id)
);

create table borrowerRating(
    rating_id serial,
    lender varchar(20),
    borrower varchar(20),
    point smallint,
    comment varchar(100),
    date date,
    primary key(rating_id)
);

alter table log
	add constraint LK_log_account
	foreign key (borrower)
	references account(username);

alter table log
	add constraint LK_log_item
	foreign key (item_id)
	references item(item_id);

alter table item
	add constraint LK_item_account
	foreign key (lender)
	references account(username);

alter table report
	add constraint LK_report_account
	foreign key (sender)
	references account(username);

alter table borrowRequest
	add constraint LK_borrowRequest_account
	foreign key (borrower)
	references account(username);

alter table borrowRequest
	add constraint LK_borrowRequest_item
	foreign key (item_id)
	references item(item_id);

alter table notification
	add constraint LK_notification_account
	foreign key (username)
	references account(username);

alter table return
	add constraint LK_return_account
	foreign key (borrower)
	references account(username);

alter table return
	add constraint LK_return_item
	foreign key (item_id)
	references item(item_id);

alter table itemRating
	add constraint LK_itemRating_item
	foreign key (item_id)
	references item(item_id);

alter table itemRating
	add constraint LK_itemRating_account
	foreign key (borrower)
	references account(username);

alter table borrowerRating
	add constraint LK_borrowerRating_account
	foreign key (lender)
	references account(username);

alter table borrowerRating
	add constraint LK_borrowerRating_account2
	foreign key (borrower)
	references account(username);
set datestyle = 'sql, dmy';