-- Create a new database called 'db_ktthuchanh'
-- Connect to the 'master' database to run this snippet
USE master
GO
-- Create the new database if it does not exist already
IF NOT EXISTS (
    SELECT [name]
        FROM sys.databases
        WHERE [name] = N'db_ktthuchanh'
)
CREATE DATABASE db_ktthuchanh
GO
USE db_ktthuchanh

-- Create a new table called '[loai_sua]' in schema '[dbo]'
-- Drop the table if it already exists
IF OBJECT_ID('[dbo].[loai_sua]', 'U') IS NOT NULL
DROP TABLE [dbo].[loai_sua]
GO
-- Create the table in the specified schema
CREATE TABLE [dbo].[loai_sua]
(
    [masua] INT NOT NULL PRIMARY KEY, -- Primary Key column
    [tensua] NVARCHAR(50) NOT NULL,
    [hinh] NVARCHAR(50) NOT NULL
);
GO

-- Create a new table called '[sua]' in schema '[dbo]'
-- Drop the table if it already exists
IF OBJECT_ID('[dbo].[sua]', 'U') IS NOT NULL
DROP TABLE [dbo].[sua]
GO
-- Create the table in the specified schema
CREATE TABLE [dbo].[sua]
(
    [masua] INT NOT NULL PRIMARY KEY, -- Primary Key column
    [tensua] NVARCHAR(50) NOT NULL,
    [trongluong] NVARCHAR(10) NOT NULL,
    [dongia] NVARCHAR(10) NOT NULL,
    [maloai] INT NOT NULL
);
GO

