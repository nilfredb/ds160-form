// src/data/ds160Questions.js
export const ds160Questions = [
    {
      section: "Información Básica",
      fields: [
        {
          type: "text",
          name: "applicationCountry",
          label: "País donde completa esta solicitud",
          required: true
        },
        {
          type: "text",
          name: "surname",
          label: "Apellido(s) como aparece en su pasaporte",
          required: true
        },
        {
          type: "text",
          name: "givenName",
          label: "Nombre(s) de pila",
          required: true
        },
        {
          type: "text",
          name: "fullNameNative",
          label: "Nombre completo en su idioma nativo",
          required: true
        },
        {
          type: "radio",
          name: "otherNamesUsed",
          label: "¿Ha usado algún otro nombre (apodo, nombre religioso, nombre anterior)?",
          options: ["Sí", "No"],
          required: true
        },
        {
          type: "select",
          name: "gender",
          label: "Género",
          options: ["Masculino", "Femenino", "No binario", "Prefiero no especificar"],
          required: true
        },
        {
          type: "select",
          name: "maritalStatus",
          label: "Estado civil",
          options: ["Soltero(a)", "Casado(a)", "Divorciado(a)", "Viudo(a)", "Separado(a)"],
          required: true
        },
        {
          type: "date",
          name: "birthDate",
          label: "Fecha de nacimiento",
          required: true
        },
        {
          type: "text",
          name: "birthCity",
          label: "Ciudad de nacimiento",
          required: true
        },
        {
          type: "text",
          name: "birthCountry",
          label: "País de nacimiento",
          required: true
        },
        {
          type: "text",
          name: "nationality",
          label: "Nacionalidad actual",
          required: true
        }
      ]
    },
    {
      section: "Información de Contacto",
      fields: [
        {
          type: "text",
          name: "homeAddress",
          label: "Dirección residencial completa",
          required: true
        },
        {
          type: "tel",
          name: "primaryPhone",
          label: "Número telefónico principal",
          required: true
        },
        {
          type: "email",
          name: "primaryEmail",
          label: "Correo electrónico principal",
          required: true
        },
        {
          type: "checkbox-group",
          name: "socialMedia",
          label: "Redes sociales que utiliza regularmente:",
          options: ["Facebook", "Instagram", "Twitter/X", "LinkedIn", "TikTok", "Otras"]
        }
      ]
    },
    {
      section: "Detalles del Pasaporte",
      fields: [
        {
          type: "text",
          name: "passportNumber",
          label: "Número de pasaporte",
          required: true
        },
        {
          type: "date",
          name: "passportIssueDate",
          label: "Fecha de emisión del pasaporte",
          required: true
        },
        {
          type: "date",
          name: "passportExpiryDate",
          label: "Fecha de vencimiento del pasaporte",
          required: true
        },
        {
          type: "radio",
          name: "lostPassport",
          label: "¿Ha perdido o le han robado algún pasaporte anteriormente?",
          options: ["Sí", "No"],
          required: true
        }
      ]
    },
    {
      section: "Historial de Viajes",
      fields: [
        {
          type: "radio",
          name: "previousUSTravel",
          label: "¿Ha visitado Estados Unidos anteriormente?",
          options: ["Sí", "No"],
          required: true
        },
        {
          type: "radio",
          name: "previousVisaDenial",
          label: "¿Le han negado alguna vez una visa estadounidense?",
          options: ["Sí", "No"],
          required: true
        },
        {
          type: "date",
          name: "lastUSTravelDate",
          label: "Fecha de su última visita a EE.UU. (si aplica)"
        },
        {
          type: "number",
          name: "estimatedStayDays",
          label: "Días estimados de estadía en EE.UU.",
          required: true
        }
      ]
    },
    {
      section: "Planes de Viaje",
      fields: [
        {
          type: "select",
          name: "travelPurpose",
          label: "Propósito principal del viaje",
          options: [
            "Turismo/Vacaciones",
            "Visita familiar",
            "Negocios/Conferencia",
            "Tratamiento médico",
            "Estudio/Intercambio",
            "Otro"
          ],
          required: true
        },
        {
          type: "date",
          name: "intendedArrivalDate",
          label: "Fecha prevista de llegada a EE.UU.",
          required: true
        },
        {
          type: "radio",
          name: "payOwnTrip",
          label: "¿Usted pagará su viaje?",
          options: ["Sí", "No"],
          required: true
        }
      ]
    },
    {
      section: "Información Familiar",
      fields: [
        {
          type: "text",
          name: "fatherFullName",
          label: "Nombre completo de su padre",
          required: true
        },
        {
          type: "text",
          name: "motherFullName",
          label: "Nombre completo de su madre",
          required: true
        },
        {
          type: "radio",
          name: "usRelatives",
          label: "¿Tiene familiares directos residiendo en EE.UU.?",
          options: ["Sí", "No"],
          required: true
        },
        {
          type: "text",
          name: "spouseName",
          label: "Nombre de su cónyuge (si aplica)"
        }
      ]
    },
    {
      section: "Historial Laboral",
      fields: [
        {
          type: "text",
          name: "currentOccupation",
          label: "Ocupación actual",
          required: true
        },
        {
          type: "text",
          name: "employerName",
          label: "Nombre de su empleador actual"
          // Se manejará en validación condicional si no es "Desempleado"
        },
        {
          type: "date",
          name: "employmentStartDate",
          label: "Fecha de inicio en su trabajo actual o un aproximado"
        },
        {
          type: "radio",
          name: "previousEmployment",
          label: "¿Ha tenido otros empleos en los últimos 5 años?",
          options: ["Sí", "No"],
          required: true
        }
      ]
    },
    {
      section: "Educación",
      fields: [
        {
          type: "select",
          name: "highestEducation",
          label: "Nivel educativo más alto alcanzado",
          options: [
            "Primaria",
            "Secundaria",
            "Técnico",
            "Universitario",
            "Posgrado",
            "Otro"
          ],
          required: true
        },
        {
          type: "text",
          name: "lastInstitution",
          label: "Nombre de la última institución educativa que asistió",
          required: true
        },
        {
          type: "radio",
          name: "usEducationPlans",
          label: "¿Planea estudiar en EE.UU. durante su visita?",
          options: ["Sí", "No"],
          required: true
        }
      ]
    },
    {
      section: "Antecedentes",
      fields: [
        {
          type: "radio",
          name: "criminalHistory",
          label: "¿Tiene antecedentes penales en cualquier país?",
          options: ["Sí", "No"],
          required: true
        },
        {
          type: "radio",
          name: "healthConditions",
          label: "¿Tiene alguna condición médica que requiera tratamiento especial?",
          options: ["Sí", "No"],
          required: true
        },
        {
          type: "radio",
          name: "previousDeportation",
          label: "¿Ha sido deportado de algún país?",
          options: ["Sí", "No"],
          required: true
        }
        
      ] 
    },
    {
        section: "Información de Contacto",
        fields: [
          {
            type: "text",
            name: "homeAddress",
            label: "Dirección residencial completa",
            required: true
          },
          {
            type: "tel",
            name: "primaryPhone",
            label: "Número telefónico principal",
            required: true
          },
          {
            type: "email",
            name: "primaryEmail",
            label: "Correo electrónico principal",
            required: true
          },
          {
            type: "radio",
            name: "preferredContactMethod",
            label: "¿Cómo deseas que te contactemos tras llenar el formulario?",
            options: ["WhatsApp", "Email", "Llamada Telefónica"],
            required: true
          }
        ]
      },
    
  ];
  