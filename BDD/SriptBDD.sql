CREATE DATABASE Pharmacie;

USE Pharmacie; 

CREATE TABLE Pharmacien(

	Pharmacien_Id INTEGER AUTO_INCREMENT NOT NULL,
	Pharmacien_Nom VARCHAR(40) NOT NULL,
	Pharmacien_Prenom VARCHAR(40) NOT NULL,
	Pharmacien_NomUtilisateur VARCHAR(40) NOT NULL,
	Pharmacien_MotDePasse VARCHAR(40) NOT NULL,
	PRIMARY KEY(Pharmacien_Id))engine=InnoDB;

CREATE TABLE Ordonnance(

	Ordonnance_Id INTEGER AUTO_INCREMENT NOT NULL,
	Ordonnance_IdMedecin INTEGER NOT NULL, 
	Ordonnance_IdPatient INTEGER NOT NULL, 
	Ordonnance_IdMaladie INTEGER NOT NULL, 
	Ordonnance_Date DATE NOT NULL,
	PRIMARY KEY(Ordonnance_Id))engine=InnoDB;

CREATE TABLE Medecin(

	Medecin_Id INTEGER AUTO_INCREMENT NOT NULL,
	Medecin_Nom VARCHAR(40) NOT NULL,
	Medecin_Prenom VARCHAR(40) NOT NULL,
	Medecin_NumeroTelephone VARCHAR(10) NOT NULL,
	Medecin_IdDiplome INTEGER NOT NULL,
	PRIMARY KEY(Medecin_Id))engine=InnoDB;

CREATE TABLE Diplome(

	Diplome_Id INTEGER AUTO_INCREMENT NOT NULL,
	Diplome_ValiditeOrdre INTEGER NOT NULL,
	PRIMARY KEY(Diplome_Id))engine=InnoDB;

CREATE TABLE Patient(

	Patient_Id INTEGER AUTO_INCREMENT NOT NULL,
	Patient_Nom VARCHAR(40) NOT NULL,
	Patient_Prenom VARCHAR(40) NOT NULL,
	Patient_DateNaissance DATE NOT NULL,
	Patient_NumeroSecurite VARCHAR(15) NOT NULL,
	Patient_NumeroTelephone VARCHAR(10) NOT NULL,
	Patient_IdMutuelle INTEGER,
	PRIMARY KEY(Patient_Id))engine=InnoDB;

CREATE TABLE Mutuelle(

	Mutuelle_Id INTEGER AUTO_INCREMENT NOT NULL,
	Mutuelle_Nom VARCHAR(40) NOT NULL,
	Mutuelle_Taux FLOAT NOT NULL,
	PRIMARY KEY(Mutuelle_Id))engine=InnoDB;

CREATE TABLE Maladie(

	Maladie_Id INTEGER AUTO_INCREMENT NOT NULL,
	Maladie_Nom VARCHAR(40) NOT NULL,
	PRIMARY KEY(Maladie_Id))engine=InnoDB;

CREATE TABLE Posologie(

	Posologie_Id INTEGER AUTO_INCREMENT NOT NULL,
	Posologie_IdOrdonnance INTEGER NOT NULL,
	Posologie_IdMedicament INTEGER NOT NULL,
	Posologie_Duree INTEGER NOT NULL,
	Posologie_QuantiteMedicament INTEGER NOT NULL,
	PRIMARY KEY(Posologie_Id))engine=InnoDB;

CREATE TABLE Medicament(

	Medicament_Id INTEGER AUTO_INCREMENT NOT NULL,
	Medicament_Nom VARCHAR(40) NOT NULL,
	Medicament_Fabriquant VARCHAR(40) NOT NULL,
	Medicament_Stock INTEGER NOT NULL,
	Medicament_Prix FLOAT NOT NULL,
	PRIMARY KEY(Medicament_Id))engine=InnoDB;

ALTER TABLE Ordonnance
ADD CONSTRAINT FK_OrdonnanceMedecin 
FOREIGN KEY(Ordonnance_IdMedecin) REFERENCES Medecin(Medecin_Id),

ADD CONSTRAINT FK_OrdonnancePatient 
FOREIGN KEY(Ordonnance_IdPatient) REFERENCES Patient(Patient_Id),

ADD CONSTRAINT FK_OrdonnanceMaladie 
FOREIGN KEY(Ordonnance_IdMaladie) REFERENCES Maladie(Maladie_Id);

ALTER TABLE Posologie
ADD CONSTRAINT FK_PosologieOrdonnance 
FOREIGN KEY(Posologie_IdOrdonnance) REFERENCES Ordonnance(Ordonnance_Id),

ADD CONSTRAINT FK_PosologieMedicament 
FOREIGN KEY(Posologie_IdMedicament) REFERENCES Medicament(Medicament_Id);

ALTER TABLE Patient 
ADD CONSTRAINT FK_PatientMutuelle 
FOREIGN KEY(Patient_IdMutuelle) REFERENCES Mutuelle(Mutuelle_Id);

ALTER TABLE Medecin
ADD CONSTRAINT FK_MedecinDiplome
FOREIGN KEY(Medecin_IdDiplome) REFERENCES Diplome(Diplome_Id);

INSERT INTO Mutuelle (Mutuelle_Nom, Mutuelle_Taux) 
VALUES ('MutEst', 1), 
	('MGEN', '0.5'), 
	('Avenir Mutuelle', 0), 
	('UMC Mutuelle', '0.4'), 
	('Mutuelle Previfrance', '0.9'), 
	('Miel Mutuelle', '0.1');

INSERT INTO Medicament (Medicament_Nom, Medicament_Fabriquant, Medicament_Stock, Medicament_Prix) 
VALUES ('Arabinogalactane', 'Boiron', 10, '15.35'), 
	('Bolcitol', 'Pfizer', 90, '4.99'), 
	('Doliprane', 'Moderna', 2, '17.99'),
	('Codeine', 'Boiron', 18, '18.00');

INSERT INTO Maladie (Maladie_Nom)
VALUES ('Rhinopharingite'),
	('Pneumopathie'),
	('Bronchite'), 
	('Herpes'), 
	('Lupus');

INSERT INTO Pharmacien (Pharmacien_Nom, Pharmacien_Prenom, Pharmacien_NomUtilisateur, Pharmacien_MotDePasse)
VALUES ('Silverstein', 'Larry', 'LarryS', 'iwashome'),
	('Kong', 'Didi', 'KongD', 'didikoko'),
	('Meilleur', 'Brie', 'MeilleurB', 'breton'),
	('Rude', 'Alavit', 'RudeA', 'abcdef');

INSERT INTO Patient (Patient_Nom, Patient_Prenom, Patient_DateNaissance, Patient_NumeroSecurite, Patient_NumeroTelephone, Patient_IdMutuelle)
VALUES ('Pesse', 'Albert', '1960/05/06', '138054958815780', '0678986532', 1),
	('Gros', 'Rebecca', '2008/03/18', '279054558139480', '0606329465', 2),
	('Casque', 'Gepetto', '1926/01/01', '101051695615795', '0795610266', null),
	('Teque', 'Grapas', '1958/11/28', '298195631615780', '0666791619', 3);

INSERT INTO Diplome (Diplome_ValiditeOrdre)
VALUES ('1'), ('0');

INSERT INTO Medecin (Medecin_Nom, Medecin_Prenom, Medecin_NumeroTelephone, Medecin_IdDiplome)
VALUES ('Vault', 'Patrick', '0666778899', '1'),
	('Halt', 'Barbara', '0788991010', '1'),
	('Lagaffe', 'Gaston', '0651649827', '2');

INSERT INTO Ordonnance (Ordonnance_IdMedecin, Ordonnance_IdPatient, Ordonnance_IdMaladie, Ordonnance_Date)
VALUES ('1', '1', '1', '2022/11/15'),
	('2', '2', '2', '2022/11/16'),
	('3', '3', '3', '2022/11/17');

INSERT INTO Posologie (Posologie_IdOrdonnance, Posologie_IdMedicament, Posologie_Duree, Posologie_QuantiteMedicament)
VALUES ('1', '1', '6', '4'),
	('1', '2', '6', '5'),
	('1', '3', '4', '1'),
	('2', '2', '6', '5'),
	('2', '3', '1', '4'),
	('3', '1', '10', '10');










