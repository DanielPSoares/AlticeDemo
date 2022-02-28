IF OBJECT_ID(N'[__EFMigrationsHistory]') IS NULL
BEGIN
    CREATE TABLE [__EFMigrationsHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
    );
END;
GO

BEGIN TRANSACTION;
GO

CREATE TABLE [BasicInfo] (
    [ID] int NOT NULL IDENTITY,
    [FullName] nvarchar(max) NOT NULL,
    [BirthDate] datetime2 NOT NULL,
    [Gender] nvarchar(max) NOT NULL,
    [City] nvarchar(max) NOT NULL,
    [PhoneNumber] nvarchar(max) NOT NULL,
    [Email] nvarchar(max) NOT NULL,
    CONSTRAINT [PK_BasicInfo] PRIMARY KEY ([ID])
);
GO

CREATE TABLE [Surveys] (
    [ID] int NOT NULL IDENTITY,
    [Nickname] nvarchar(max) NOT NULL,
    [CatsDogs] nvarchar(max) NOT NULL,
    [Chocolate] bit NOT NULL,
    [Fish] nvarchar(max) NOT NULL,
    [Color] nvarchar(max) NOT NULL,
    [Cookie] bit NOT NULL,
    [BasicInfoID] int NOT NULL,
    CONSTRAINT [PK_Surveys] PRIMARY KEY ([ID]),
    CONSTRAINT [FK_Surveys_BasicInfo_BasicInfoID] FOREIGN KEY ([BasicInfoID]) REFERENCES [BasicInfo] ([ID]) ON DELETE CASCADE
);
GO

CREATE INDEX [IX_Surveys_BasicInfoID] ON [Surveys] ([BasicInfoID]);
GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20220227224550_AlticeDemoBackend', N'6.0.2');
GO

COMMIT;
GO

