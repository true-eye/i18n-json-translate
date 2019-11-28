const resources = {
    before: {
        confirm: {
            label: {
                en: 'Please confirm the following',
                fr: 'Veuillez confirmer ce qui suit',
                es: 'Por favor, confirme lo siguiente',
                it: 'Si prega di confermare la seguente',
                de: 'Bitte bestätigen Sie die folgende',
            },
            b_conditions: {
                en: 'I am aware of the conditions of the e-visa issuance and the rules of entry, stay and exit with an e-visa',
                fr: 'Je connais les conditions de délivrance du visa électronique et les règles d\'entrée, de séjour et de sortie avec un visa électronique',
                es: 'Soy consciente de las condiciones de la emisión electrónica de visado y las reglas de entrada, estancia y salida con un e-visado',
                de: 'Ich bin mir bewusst, der Bedingungen der E-Visaerteilung und die Regeln für die Einreise, Aufenthalt und Ausgang mit einer E-Visum',
                it: 'Sono consapevole delle condizioni del rilascio e-Visto e le regole di ingresso, soggiorno e l\'uscita con un e-visto',
            },
            b_processing: {
                en: 'I agree to the automatic processing, transfer and storage of data provided in the application for e-visa purposes.',
                fr: 'J\'accepte le traitement, le transfert et le stockage automatiques des données fournies dans la demande aux fins du visa électronique.',
                es: 'Estoy de acuerdo con el procesamiento automático, transferencia y almacenamiento de los datos proporcionados en la solicitud de los propósitos e-visado.',
                it: 'Acconsento al trattamento automatico, il trasferimento e lo stoccaggio dei dati forniti nella domanda di scopi di e-visto.',
                de: 'Ich bin mit der automatischen Verarbeitung, Übertragung und Speicherung von in der Anwendung zur Verfügung gestellten Daten für E-Visum Zwecke.',
            },
            b_email_notification: {
                en: 'I agree to receive automatic messages sent to my personal e-mail address concerning the status of my application and the decision thereon as well as detailed instructions for further steps.',
                fr: 'J\'accepte de recevoir des messages automatiques envoyés à mon adresse e-mail personnelle concernant le statut de ma candidature et la décision prise, ainsi que des instructions détaillées pour les étapes suivantes.',
                de: 'Ich bin damit einverstanden automatische Nachrichten zu empfangen, um meine persönlichen E-Mail-Adresse gesendet über den Status meiner Bewerbung und die Entscheidung darüber sowie detaillierte Anweisungen für die weitere Schritte.',
                es: 'Estoy de acuerdo en recibir mensajes automáticos enviados a mi dirección de correo electrónico personal en relación con el estado de mi solicitud y la decisión correspondiente, así como instrucciones detalladas para dar nuevos pasos.',
                it: 'Accetto di ricevere messaggi automatici inviati al mio indirizzo e-mail personale concernenti lo stato della mia domanda e la decisione, nonché le istruzioni dettagliate per ulteriori passi.',
            },
        },
        start_button: {
            en: 'Start Your Application',
            fr: 'Compléter un nouveau formulaire',
            es: 'Rellenar nuevo cuestionario',
            de: 'Neuen Antragsformular ausfüllen',
            it: 'Compila un nuovo modulo'
        }
    },
    validations: {
        required: {
            en: `This field is required`,
            fr: `Ce champ de saisie est obligatoire`,
            es: `Campo obligatorio para rellenar`,
            de: `Das ist ein Pflichtfeld.`,
            it: `E obbligatorio compilare questo campo`,
        },
        validatePwd: {
            short: {
                en: `Password is too short.(Minium length is 6)`,
                fr: `Mot de passe trop court (six caractères minimum exigés)`,
                es: `Contraseña es demasiado corta (6 símbolos como mínimo)`,
                de: `Passwort ist zu kurz (Minimum 6 Symbole )`,
                it: `La password è troppo corta (minimo 6 caratteri).`,
            },
            complexity: {
                en: `Password does not meet complexity requirements (at least one alphabetical symbol and one numeric symbol).`,
                fr: `Le mot de passe ne répond pas aux exigences de complexité (au moins un symbole alphabétique et un symbole numérique).`,
                es: `La contraseña no cumple los requisitos de complejidad (al menos un símbolo alfabético y un símbolo numérico).`,
                de: `Das Passwort erfüllt nicht die Komplexitätsanforderungen (mindestens ein alphabetisches und ein numerisches Symbol).`,
                it: `La password non soddisfa i requisiti di complessità (almeno un simbolo alfabetico e un simbolo numerico).`,
            }
        },
        validatePwdConfirm: {
            notmatch: {
                en: `Password and the password confirmation are not matching up.`,
                fr: `Le mot de passe et la confirmation de celui-ci ne sont pas identiques.`,
                es: `Contraseña y su confirmación no coinciden`,
                de: `Passwort und seine Bestätigung stimmen nicht zusammen`,
                it: `La password e la conferma non corrispondono.`,
            }
        },
        validateEmailConfirm: {
            notmatch: {
                en: 'The confirmation e-mail must match your e-mail address.',
                fr: `L'e-mail de confirmation doit correspondre à votre adresse e-mail.`
            }
        }
    },
    citizenCode: {
        label: {
            en: 'Nationality',
            fr: 'Nationalité',
        },
        extra: {
            en: 'Please specify the issuing country of the passport that will be used to enter the Russian Federation.',
            fr: 'Veuillez préciser le pays du passeport qui sera utilisé pour entrer en Fédération de Russie.'
        }
    },
    visitArea: {
        label: {
            en: 'Visit area',
            fr: 'Zone de visite'
        },
        extra: {
            en: 'Choose an area you are going to visit',
            fr: 'Choisissez une région que vous allez visiter'
        }
    },
    language: {
        label: {
            en: `Hints and help language`,
            fr: `Astuces et langage d'aide`
        },
        extra: {
            en: `Select language in which you would like the hints, regarding completion of the application form, to be displayed`,
            fr: `Indiquez la langue des conseils sur le remplissage de votre demande de visa`,
            es: `Indique el idioma de soplos de la lista “Hints and help language”.`,
            de: `Geben Sie bitte die Sprache der Ausfüllhilfen an.`,
            it: `Indicare la lingua delle spiegazioni`,
        }
    },
    pwd: {
        label: {
            en: `Password`,
            fr: 'Mot de passe'
        },
        extra: {
            en: `If there are technical issues with the system, or you want to complete your application some other time, you can save your work and later, start where you left off. In order to access your application later, however, you will need: (1) your Application ID, and (2) the password that you will enter on this page.`,
            fr: `Entrez le mot de passe`,
            es: `Introduzca la contraseña`,
            de: `Geben Sie das Passwort`,
            it: `Immettere la password`,
        }
    },
    pwd_confirm: {
        label: {
            en: `Confirm password`,
            fr: 'Confirmez le mot de passe'
        },
        extra: {
            en: `Enter the password confirmation`,
            fr: `Entrez le mot de passe de confirmation`,
            es: `Introduzca la contraseña de confirmación`,
            de: `Geben Sie das Passwort Bestätigung`,
            it: `Immettere la password di conferma`,
        }
    },
    email: {
        label: {
            en: `Your email`,
            fr: 'Votre email'
        },
        extra: {
            en: `Please indicate your email address`,
            fr: `Merci d'indiquer votre adresse email`
        }
    },
    email_confirm: {
        label: {
            en: `Confirm your personal email`,
            fr: 'Confirmez votre email personnel'
        },
    },
    visa: {
        section_title: {
            en: 'Visa details',
            fr: 'L’information sur le visa demande',
            es: 'Los detalles de la visa solicitada',
            de: 'Angaben zum beantragten Visum',
            it: 'Informazioni sul visto richiesto'
        },
        nationality: {
            label: {
                en: 'Nationality',
                fr: 'Nationalité'
            },
            extra: {
                en: 'Enter your citizenship, in accordance with the country or organisation whose passport you will be entering Russian Federation with.',
                fr: 'Indiquez le nom du pays ou de l’organisation dont vous allez utiliser le passeport pour entrer sur le territoire de la Fédération de Russie',
                es: 'Indique con pasaporte de que país u organización va a entrar en el territorio de la Federación de Rusia',
                de: 'Geben Sie bitte das Ausstellungsland oder die Ausstellungsinstitution Ihres Reisepasses an, mit dem Sie in Russland einreisen werden.',
                it: `Indicare con il passaporto di quale Stato o di quale organizzazione, Lei intenda entrare nel territorio della Federazione Russa.`
            }
        },
        b_ever_loss: {
            label: {
                en: 'If you had USSR or Russian nationality at some time please select "yes" and indicate when and why you lost it',
                fr: `Si vous avez eu la nationalité russe ou soviétique à un moment donné, veuillez sélectionner "oui" et indiquer quand et pourquoi vous l'avez perdu.`
            },
            extra: {
                en: 'Enter "yes" in this field, if you formerly had USSR or Russian citizenship; if not enter “no”. If yes, please answer the specifying questions.',
                fr: 'Indiquez «Yes» dans cette case si vous avez eu la nationalité de l’URSS ou de Russie, sinon indiquez ‘non’. Si la réponse est positive il faut répondre à des questions supplémentaires.',
                es: 'Indique "Yes" en este campo, si antes tenía la ciudadanía de la URSS o de Rusia, en caso contrario indique “no”. Siendo la respuesta positiva hace falta responder a las preguntas especificativas.',
                de: 'Falls Sie zuvor im Besitz - Staatsangehörigkeit der UdSSR bzw. Russlands waren, antworten Sie bitte in diesem Datenfeld mit "Yes", andernfalls antworten Sie bitte mit "No". Bei „Yes“ beantworten Sie bitte einige Folgefragen.',
                it: `Indicare “Sì” in questo campo, se Lei ha mai avuto la cittadinanza dell'Unione Sovietica o quella russa, altrimenti selezionare “No”. Se la risposta è positiva, è necessario rispondere alle domande specifiche.`
            }
        },
        visa_type: {
            goalsect: {
                label: {
                    en: 'Purpose of visit (section)',
                    fr: 'But de la visite (section)'
                },
                extra: {
                    en: 'Select your purpose of visit from the top drop menu list. Then from the lower drop menu list choose the specification of your purpose of visit',
                    fr: 'Dans la liste qui s’ouvre en haut choisissez le but du voyage. Ensuite dans la liste qui s’ouvre en bas précisez ce but de voyage.',
                    es: 'Primeramente elija de la lista superior el motivo de viaje. Después de la lista inferior elija la precisión del motivo.',
                    de: 'Wählen Sie bitte aus der oberen Vorschlagsliste den Reisezweck. Aus der unteren Vorschlagsliste wählen Sie eine Präzisierungsoption für den Zweck Ihrer Reise.',
                    it: `Si prega di selezionare dalla lista del menu a tendina in alto lo scopo del viaggio. Poi dall'elenco del menu a tendina inferiore selezionare degli obiettivi specifici.`
                }
            },
            goal: {
                label: {
                    en: 'Purpose of visit',
                    fr: 'But de la visite'
                },
                extra: {
                    en: 'Select your purpose of visit from the list',
                    fr: 'Choisissez le but de voyage de la liste',
                    es: 'Elija de la lista el motivo de viaje',
                    de: 'Wählen Sie bitte den Zweck Ihrer Reise aus der Liste',
                    it: `Selezionare lo scopo del viaggio dall'elenco`
                }
            },
            visakind: {
                label: {
                    en: 'Visa category and type',
                    fr: 'Catégorie et type de visa'
                },
                extra: {
                    en: 'Select the specification for your purpose of visit',
                    fr: 'Choisissez le but de voyage précisé de la liste',
                    es: 'Elija de la lista inferior precisión del motivo',
                    de: 'Wählen Sie bitte eine Präzisierungsoption für den Zweck Ihrer Reise aus der Liste',
                    it: 'Selezionare dalla lista lo scopo specifico del viaggio'
                }
            }
        },
        n_entries: {
            label: {
                en: 'Number of entries',
                fr: `Nombre d'entrées`
            },
            extra: {
                en: 'Enter the intended number of entries to Russian Federation',
                fr: 'Indiquez le nombre d’entrées demandées',
                es: 'Indique la cantidad prevista de visitas',
                de: 'Geben Sie bitte die voraussichtliche Anzahl der Einreisen an',
                it: 'Inserire il numero stimato delle visite'
            }
        },
        entry_date: {
            label: {
                en: 'Date of entry into Russia',
                fr: `Date d'entrée en Russie`
            },
            extra: {
                en: 'Enter your intended date of entry to Russia in "dd/mm/yyyy" format',
                fr: 'Indiquez la date d’arrivée prévue en Russie au format ‘jj/mm/aaaa’',
                es: 'Indique la fecha presunta de entrada en Rusia en el formato “dd/mm/aaaa”',
                de: 'Geben Sie bitte das voraussichtliche Einreisedatum in Russland im Format "TT/MM/JJJJ" an',
                it: 'Mettere la data prevista d’ingresso in Russia nel formato “gg/mm/aaaa”'
            }
        },
        issue_date: {
            label: {
                en: 'Date of issue',
                fr: `Date d'Emission`
            },
            extra: {
                de: 'Geben Sie bitte das Ausstellungsdatum Ihres Reisepasses im Format "TT/MM/JJJJ" an',
                it: 'Inserire la data del rilascio del Suo passaporto nel formato “gg/mm/aaaa”'
            }
        },
        departure_date: {
            label: {
                en: 'Date of exit from Russia',
                fr: `Date de sortie de Russie`
            },
            extra: {
                en: 'Enter your intended date of entry to Russia in "dd/mm/yyyy" format',
                fr: 'Indiquez la date départ prévue de Russie au format ‘jj/mm/aaaa’',
                es: 'Indique la fecha presunta de salida de Rusia en el formato “dd/mm/aaaa”',
                de: 'Geben Sie bitte das voraussichtliche Ausreisedatum aus Russland im Format "TT/MM/JJJJ" an',
                it: 'Mettere la data prevista di partenza dalla Russia nel formato “gg/mm/aaaa”'
            }
        }
    },
    personal: {
        section_title: {
            en: 'Personal details',
            fr: 'L’information personnelle',
            es: 'Información personal',
            de: 'Personenbezogene Daten',
            it: 'Informazioni personali'
        },
        citizenCode: {
            label: {
                en: 'Nationality',
                fr: 'Nationalité'
            },
            extra: {
                en: 'Please specify the issuing country of the passport that will be used to enter the Russian Federation.',
                fr: 'Veuillez préciser le pays du passeport qui sera utilisé pour entrer en Fédération de Russie.'
            }
        },
        surname: {
            label: {
                en: 'Surname (as in passport)',
                fr: 'Nom de famille (comme dans le passeport)'
            },
            extra: {
                en: 'Enter your surname using letters of the English alphabet, as shown in your passport',
                fr: 'Indiquez votre nom en lettres latines tel qu’il est indiqué sur votre passeport',
                es: 'Inserte su apellido con letras inglesas como está indicado en el pasaporte',
                de: 'Geben Sie bitte Ihren Familiennamen in lateinischen Buchstaben wie im Reisepass bezeichnet an.',
                it: 'Inserire il/i Suo/i nome/i usando le lettere dell’alfabeto inglese come scritto nel passaporto.'
            }
        },
        firstnames: {
            label: {
                en: 'First name, middle names, patronymic names (as in passport)',
                fr: 'Prénom, prénoms, noms patronymiques (comme dans le passeport)'
            },
            extra: {
                en: 'Enter your first name(s), middle name(s) and/or patronym, using letters of the English alphabet, as shown in your passport',
                fr: 'Veuillez Introduire votre/vos prénom(s) en caractères de l’alphabet latin anglais tel(s) que dans votre passeport.',
                es: 'Inserte su nombre (nombres) con letras inglesas como está indicado en el pasaporte',
                de: 'Geben Sie bitte Ihren Vornamen in lateinischen Buchstaben wie im Reisepass bezeichnet an.',
                it: 'Inserire il Suo nome/i usando le lettere dell’alfabeto inglese come scritto nel passaporto.'
            }
        },
        b_other_names: {
            label: {
                en: 'Have you ever had other names (maiden name, pseudonym, holy order etc.)?',
                fr: `Avez-vous déjà eu d'autres noms (nom de jeune fille, pseudonyme, ordre sacré, etc.)?`
            },
            extra: {
                en: 'Have you ever had other names (maiden name, pseudonym, holy order etc.)? If you ever used other names (maiden name, pseudonym, holy order etc.) you must enter them. You should only enter one name in each field. To enter other names please use the option “Add”',
                fr: 'Veuillez préciser si vous possédez ou utilisez un autre nom (d’avant mariage, pseudonymes, titres religieux etc.)? En cas de réponse affirmative à cette question, veuillez indiquer tous les noms (noms de famille, pseudonymes, titres religieux - 8 noms maximum), à raison d’un seul nom par champ de saisie. Pour ajouter un champ de saisie, cliquez sur le bouton "Ajouter".',
                es: 'Tiene usted otros nombres con los que se haya identificado (antes de matrimonio, seudónimo, orden religioso, etc.)? Siendo la respuesta afirmativa hace falta indicar todos los nombres (apellidos, seudónimos, ordenes, etc.,)(ocho como máximo). En cada campo se puede indicar sólo un nombre. Para indicar más nombres pulse el botón AGREGAR.',
                de: 'Falls vorhanden, geben Sie bitte alle weiteren jemals benutzten Namen, Pseudonyme, religiösen Amtstitel oder auch Ihren Geburtsnamen vor der Heirat an. Für jeden Namen ist nur ein Datenfeld vorgesehen. Um weitere Namen anzugeben, wählen Sie die Option „Hinzufügen“.',
                it: 'Lei ha mai avuto altri nomi (prima del matrimonio, pseudonimi, titoli religiosi, ecc.)? Se la risposta è positiva, è necessario specificare tutti i nomi (cognomi, pseudonimi, titoli religiosi, ecc.) (massimo otto). Per ogni campo è possibile specificare un solo nome. Per inserire altri nomi, cliccare “Aggiungere”.'
            }
        },
        sex: {
            label: {
                en: 'Sex',
                fr: 'Sexe'
            }
        },
        birth_date: {
            label: {
                en: 'Date of birth',
                fr: 'Date de naissance'
            }
        },
        birth_place: {
            label: {
                en: 'Your place of birth',
                fr: 'Votre lieu de naissance'
            },
            extra: {
                en: 'Enter your place of birth, as shown in your passport',
                fr: 'Indiquez le lieu de naissance conformément au passeport',
                es: 'Inserte lugar de su nacimiento como está indicado en el pasaporte',
                de: 'Geben Sie bitte Ihren Geburtsort wie in Ihrem Pass bezeichnet an.',
                it: 'Inserire il luogo di Sua nascita, come indicato nel passaporto.'
            }
        },
        b_born_in_Russia: {
            label: {
                en: 'If you were born in Russia, select "yes" and specify when and which country you have immigrated to',
                fr: 'Si vous êtes né en Russie, sélectionnez "oui" et précisez quand et dans quel pays vous avez immigré'
            },
            extra: {
                en: 'If you were born in Russia, answer “yes” and enter the name of the country which you immigrated to and when',
                fr: 'Si vous êtes nés en Russie, cochez ‘Yes’ et indiquer quand et dans quel pays vous avez émigré',
                es: 'Si nació en Rusia responde “Sí” e indique cuando y a que país emigró',
                de: 'Antworten Sie bitte mit „Yes“, wenn Sie in Russland geboren sind. Geben Sie bitte an, wann und in welches Land Sie ausgewandert sind.',
                it: 'Lei è nato in Russia? Se la risposta è “Sì”, specificare quando e in quale paese Lei è stato emigrato.'
            }
        }
    },
    passport: {
        section_title: {
            en: 'Passport details',
            fr: 'L’information sur le passeport',
            es: 'Información del pasaporte',
            de: 'Angaben zum Pass',
            it: 'Informazioni sul passaporto'
        },
        type: {
            label: {
                en: 'Type of passport',
                fr: 'Type de passeport'
            },
            extra: {
                en: 'Enter your passport type',
                fr: 'Entrez votre type de passeport'
            }
        },
        number: {
            label: {
                en: 'Passport Number',
                fr: 'Numéro de passeport'
            },
            extra: {
                en: 'Enter your passport number (including the series number)',
                fr: 'Indiquez le numéro de votre passeport (y compris la série)',
                es: 'Indique el número de su pasaporte con la serie',
                de: 'Geben Sie bitte die Serie und die Nummer Ihres Reisepasses an',
                it: 'Inserire il numero del Suo passaporto (compresa la serie)'
            }
        },
        issue_date: {
            label: {
                en: 'Date of issue',
                fr: `Date d'Emission`
            }
        },
        expiration_date: {
            label: {
                en: 'Date of expiry',
                fr: `Date d'expiration`
            },
            extra: {
                de: 'Geben Sie bitte das Gültigkeitsdatum Ihres Reisepasses im Format "TT/MM/JJJJ" an',
                it: 'Inserire la data della scadenza del Suo passaporto nel formato “gg/mm/aaaa”'
            }
        }
    },
    visit: {
        section_title: {
            en: 'Visit details',
            fr: 'L’information de votre séjour',
            es: 'Información sobre la visita',
            de: 'Angaben zum Besuch',
            it: 'Informazioni sulla visita'
        },
        visakind: {
            label: {
                en: 'Purpose of visit',
                fr: 'But de la visite'
            },
            extra: {
                en: 'Select your purpose of visit from the list',
                fr: 'Sélectionnez votre but de visite dans la liste'
            }
        },
        visitArea: {
            label: {
                en: 'Visit area',
                fr: 'Zone de visite'
            },
            extra: {
                en: 'Choose an area you are going to visit',
                fr: 'Choisissez une région que vous allez visiter'
            }
        },
        entry_date: {
            label: {
                en: 'Date of entry into Russia',
                fr: `Date d'entrée en Russie`
            },
            extra: {
                en: 'Enter your intended date of entry to Russia in "dd/mm/yyyy" format',
                fr: 'Indiquez la date d’arrivée prévue en Russie au format ‘jj/mm/aaaa’',
                es: 'Indique la fecha presunta de entrada en Rusia en el formato “dd/mm/aaaa”',
                de: 'Geben Sie bitte das voraussichtliche Einreisedatum in Russland im Format "TT/MM/JJJJ" an',
                it: 'Mettere la data prevista d’ingresso in Russia nel formato “gg/mm/aaaa”'
            }
        },
        stays: {
            label: {
                en: 'Intended places of stay in the Russian Federation',
                fr: 'Lieux de séjour prévus en Fédération de Russie'
            },
            extra: {
                en: 'List the intended places of stay in the Russian Federation and relevant contact information. You may list up to 10 places you plan to stay at',
                fr: `Indiquez les lieux de séjour prévus dans la Fédération de Russie et les informations de contact pertinentes. Vous pouvez lister jusqu'à 10 endroits dans lesquels vous prévoyez de rester`
            },
            code: {
                en: 'Type of accommodation',
                fr: `Type d'hébergement`
            },
            0: {
                name: {
                    en: 'Name of the hotel/organization'
                },
                address: {
                    en: 'Address of the hotel/organization'
                },
                phone: {
                    en: 'Telephone number of the hotel/organization'
                },
                fax: {
                    en: 'Fax number of the hotel/organization (if available)'
                },
                email: {
                    en: 'E-mail address of the hotel/organization (if available)'
                }
            },
            1: {
                name: {
                    en: 'Family name, first name(s) of the individual'
                },
                address: {
                    en: 'Address of the individual'
                },
                phone: {
                    en: 'Telephone number of the individual'
                },
                fax: {
                    en: 'Fax number of the individual (if available)'
                },
                email: {
                    en: 'E-mail address of the individual (if available)'
                }
            }
        },
        b_visited_russia: {
            label: {
                en: 'Have you ever visited Russia?'
            },
            extra: {
                en: 'Indicate whether you have been in Russia before. If the answer is yes, you will need to indicate how many times you were in Russia and the date of your last trip.',
                fr: `Indiquez si vous avez déjà été en Russie. Si la réponse est positive, indiquez le nombre de voyages et les dates de votre dernier séjour`,
                es: 'Indique si ya estuviera usted en Rusia. En el caso de la respuesta positiva tiene que poner cuantas veces estuve en Rusia y las fechas de su ultimo viaje.',
                de: 'Geben Sie bitte an, ob Sie die Russische Föderation bereits besucht haben. Wenn „Yes“ , geben Sie bitte die Anzahl Ihrer bisherigen Russland-Aufenthalte und das Datum Ihrer letzten Reise nach Russland an',
                it: 'Indicare se Lei è mai stato in Russia. Se la risposta è positiva, è necessario indicare quante volte Lei è stato in Russia e la data del Suo ultimo viaggio.'
            }
        }
    },
    contacts_occupations: {
        section_title: {
            en: 'Contacts and occupation',
        },
        b_resident: {
            label: {
                en: 'Do you have a permanent residential address?'
            },
            extra: {
                en: 'If the answer is yes you will have to indicate the address of residence, telelphone number, fax number, email address.',
                fr: 'Avez-vous une adresse où vous résidez de façon permanente? En cas de réponse affirmative à cette question, veuillez indiquer votre adresse de résidence, le numéro de téléphone, le numéro de fax et l’adresse email.',
                es: 'Tiene usted un domicilio permanente? Siendo la respuesta positiva hace falta indicar la dirección de su domicilio, número de teléfono, fax, E-mail.',
                de: 'Haben Sie die Adresse des ständigen Wohnsitzes? Wenn ja, geben Sie bitte Adresse, Telefonnummer, Faxnummer und E-mail Adresse an',
                it: `Lei ha l’indirizzo di residenza permanente? Se la risposta è positiva, è necessario specificare l'indirizzo,il numero di telefono, numero di fax e indirizzo e-mail.`
            }
        },
        b_occupation: {
            label: {
                en: 'Do you work (study) in the present time?'
            },
            extra: {
                en: 'If the answer is yes you will have to indicate the work address or place of study, position, address, telephone number, number of fax and email.',
                fr: 'Travaillez-vous où faites-vous des études actuellement? En cas de réponse affirmative à cette question, veuillez indiquer votre lieu actuel de travail ou d’études, la fonction, l’adresse, le numéro de téléphone, le numéro de fax et l’adresse email.',
                es: 'Trabaja (estudia) usted actualmente? En caso afirmativo, hace falta indicar su lugar actual de trabajo o de estudios, puesto, dirección, número de teléfono, fax, E-mail.',
                de: 'Arbeiten (studieren) Sie? Wenn ja, geben Sie bitte aktuelle Arbeits- bzw. Studienstelle, Adresse, Telefonnummer, Faxnummer und E-mail Adresse an',
                it: `Lei lavora (studia) attualmente? Se la risposta è positiva, è necessario indicare l'attuale luogo di lavoro o di studio, posizione, indirizzo, numero di telefono, numero di fax ed e-mail.`
            }
        },
        b_children: {
            label: {
                en: 'Children under 16 years and other relatives written in your passport and travelling with you:'
            },
            extra: {
                en: `Indicate "yes" in this field if you travel with children under the age of 16, and other relatives, otherwise select "no". If the answer is yes, you must provide specifying information`,
                fr: 'Veuillez sélectionner « Yes » si vous êtes accompagné des enfants de moins de 16 ans, soit d’autres parents; dans le cas contraire veuillez sélectionner «No». En cas de réponse affirmative à cette question, veuillez fournir des précisions.',
                es: 'Ponga "Sí" en esta casilla si Usted tiene menores de 16 años y otros familiares que le acompañan, en caso contrario ponga “No”. En caso afirmativo, hay que detallarlo.',
                de: 'Geben Sie bitte „Yes“ in diesem Feld an, wenn Sie von Kindern unter 16 Jahren und anderen Verwandten begleitet werden, anderenfalls geben Sie „No“ an. Wenn „Yes“, geben Sie bitte präzisierende Informationen an.',
                it: 'Indicare “Si” in questo campo se si viaggia con bambini al di sotto di 16 anni e altri parenti, altrimenti selezionare “No”. Se la risposta è positiva, è necessario specificare tutti i dettagli.'
            }
        },
        b_relatives: {
            label: {
                en: 'Do you currently have relatives in Russia?'
            },
            extra: {
                en: `Answer "yes", if you currently have relatives in Russia. If the answer is yes, you must indicate them. You must only enter the information regarding one relative per field. In order to add information regarding other relatives, please use the option "Add"`,
                fr: 'Sélectionnez « Yes » si vous avez actuellement les liens familiaux sur le territoire de la Russie. En cas de réponse affirmative à cette question, veuillez les indiquer, en fournissant l’information dans un champ de saisie séparé pour chaque personne. Pour ajouter un champ de saisie, veuillez cliquer sur le bouton "Ajouter".',
                es: 'Ponga "Sí" en esta casilla si Usted tiene menores de 16 años y otros familiares que le acompañan, en caso contrario ponga “No”. En caso afirmativo, hay que detallarlo.',
                de: 'Antworten Sie in diesem Datenfeld mit „Yes“, wenn Sie derzeit auf dem Territorium der Russischen Föderation Verwandte haben. Wenn „Yes“, benennen Sie. In einem Datenfeld sind jeweils nur Informationen zu einer verwandten Person anzugeben. Um die Informationen zu weiteren Verwandten einzugeben, benutzen Sie die Option „Add“.',
                it: 'Indicare “Sì” in questo campo, se attualmente Lei ha parenti sul territorio della Federazione Russa. Se la risposta è positiva, è necessario indicarli. Per ogni campo è possibile inserire informazioni su un solo parente. Per inserire le informazioni relative ad altri parenti, cliccare “Aggiungere”'
            }
        }
    },
    relatives: {
        section_title: {
            en: 'Relatives details',
        },
        b_relatives: {
            label: {
                en: 'Do you currently have relatives in Russia?'
            },
            extra: {
                en: `Answer "yes", if you currently have relatives in Russia. If the answer is yes, you must indicate them. You must only enter the information regarding one relative per field. In order to add information regarding other relatives, please use the option "Add"`,
                fr: 'Sélectionnez « Yes » si vous avez actuellement les liens familiaux sur le territoire de la Russie. En cas de réponse affirmative à cette question, veuillez les indiquer, en fournissant l’information dans un champ de saisie séparé pour chaque personne. Pour ajouter un champ de saisie, veuillez cliquer sur le bouton "Ajouter".',
                es: 'Ponga "Sí" en esta casilla si Usted tiene menores de 16 años y otros familiares que le acompañan, en caso contrario ponga “No”. En caso afirmativo, hay que detallarlo.',
                de: 'Antworten Sie in diesem Datenfeld mit „Yes“, wenn Sie derzeit auf dem Territorium der Russischen Föderation Verwandte haben. Wenn „Yes“, benennen Sie. In einem Datenfeld sind jeweils nur Informationen zu einer verwandten Person anzugeben. Um die Informationen zu weiteren Verwandten einzugeben, benutzen Sie die Option „Add“.',
                it: 'Indicare “Sì” in questo campo, se attualmente Lei ha parenti sul territorio della Federazione Russa. Se la risposta è positiva, è necessario indicarli. Per ogni campo è possibile inserire informazioni su un solo parente. Per inserire le informazioni relative ad altri parenti, cliccare “Aggiungere”'
            }
        }
    },
    appointment: {
        section_title: {
            en: 'Appointment details',
            fr: 'Date et lieu de dépôt de ma demande',
            es: 'Fecha y lugar de aplicación',
            de: 'Datum und Ort der Abgabe des Visumantrags',
            it: 'Data e luogo di presentazione della domanda'
        },
        destination: {
            label: {
                en: 'Select the location where you will be applying for your visa',
            },
            extra: {
                en: 'Indicate which Russian Embassy or Consulate where you intend to apply for your visa. Your application will be sent to the selected authority, for a decision to be made regarding your application.',
                fr: 'Veuillez indiquez dans quelle ambassade ou consulat russe vous souhaiteriez solliciter votre visa. Votre questionnaire informatique du visa sera transféré dans l’établissement de votre choix, celui-ci étant maître de la prise de décision pour la délivrance du visa.',
                es: 'Indique en que Embajada de Rusia u Oficina Consular usted planea solicitar el visado. Su cuestionario lo mandarán a la institución elegida para la toma de decisión sobre el visado.',
                de: 'Geben Sie bitte an, in welcher Botschaft, in welchem Generalkonsulat der Russischen Föderation oder in welchem Visazentrum Sie das Visum beantragen wollen. Ihr Antrag wird an die gewählte Vergabestelle zwecks Entscheidung über die Visumerteilung weitergeleitet.',
                it: `Indicare in quale ambasciata o consolato russo Lei ha l’intenzione di ottenere il visto. Il modulo elettronico della richiesta del visto sarà inviato all'ufficio selezionato, per la decisione del rilascio del visto.`
            }
        }
    }
}