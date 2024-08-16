"use client";
const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      activeEventId: null,
      modalIsOpen: false,
      isNavOpen: false,
      showContactModal: false,
      isLargeScreen: false,
      isClient: false,
      windowWidth: 0,
      zeffyWarningText:
        "A donation to the payment platform Zeffy will automatically populate at ~9% of your donation to this project. To prevent this charge, enter the amount of your donation to this project, choose Other from the dropdown menu in the Summary section, then enter the amount that you want to donate to Zeffy ($0 is fine).",
      fiscalFilms: [
        {
          title: "All That's Left Of You",
          type: "Fiction Feature",
          status: "Pre-Production",
          director: "Cherien Dabis",
          producer: "Thanassis Karathanos",
          execProducer: "Karim Amer",
          image: "/img/all-thats-left-of-you.jpeg",
          directorBio:
            "Cherien Dabis is a critically acclaimed Palestinian American filmmaker and Emmy nominated television director. She is best known for her critically acclaimed independent feature films, AMREEKA (2009), and MAY IN THE SUMMER (2013), which premiered at the Sundance, Cannes and Venice film festivals and won dozens of international awards. AMREEKA was nominated for three Independent Spirit Awards, including Best Picture, and broke records in its theatrical release by becoming the most-screened Arab-directed film in US-cinema history. Dabis is highly sought after in television for her standout episodic directing work on Emmy and Golden Globe-winning shows like ONLY MURDERS IN THE BUILDING (Hulu), RAMY (Hulu) and OZARK (Netflix)",
          producerBio:
            "Thanassis Karathanos studied political sciences and economics in Athens and Berlin. In 1998 he founded the film production company TWENTY TWENTY VISION in Berlin and in 2003 the production company PALLAS FILM in Halle (Saale). He has produced dozens of international films that have been celebrated at top tier film festivals and enjoy theatrical success worldwide. Recent credits include Cannes official selection MEDITERRANEAN FEVER (2022), THE GRAVEDIGGER’S WIFE (2021), Academy Award-nominated THE MAN WHO SOLD HIS SKIN (2020) and Cannes competition title IT MUST BE HEAVEN (2019). He is a member of the European and German Film Academy.",
          execProducerBio:
            "Karim Amer is an Academy Award-nominated filmmaker. His most recent film DEFIANT (2023) premiered at the Toronto Film Festival. THE GREAT HACK (2019), which he directed and produced, premiered at the Sundance Film Festival, was BAFTA and Emmy-nominated, and won a Cinema Eye Award. He also directed and produced HBO’s THE VOW (2020), a series about the self-improvement group NXIVM.  He has also produced Emmy-winning and Oscar-nominated THE SQUARE (2013), Audience Award-winner at the Sundance Film Festival and the Toronto Film Festival. He has produced the Golden Globe-winning series RAMY (2019) and teamed up with Angelina Jolie to produce Academy Award-nominated THE BREADWINNER (2017). Karim is a member of the Academy of Motion Picture Arts and Sciences.",
          logline:
            "In the moments before a Palestinian teen is confronted by Israeli soldiers at a protest in the West Bank, his mother recounts the series of events that led him to that fateful moment, starting with his grandfather’s displacement from Jaffa in 1948. All That’s Left of You is an epic historical drama chronicling the story of one family over three generations and examining the passage of trauma to each.",
          synopsis:
            "The year is 1948. Hundreds of thousands of Palestinians have been forced to flee their homes. But Palestinian citrus farmer SHARIF refuses to go anywhere. Instead, he sends his family to safety and stays behind to protect their multigenerational land. Soon after, the city falls, and Sharif is captured. Months go by, and his family fears the worst. Even his youngest son SALIM, who’s desperate to hold out hope, starts to mourn. A year later, they’ve given up on ever seeing Sharif again. That’s when Sharif unexpectedly turns up on their doorstep. A shadow of the man he used to be, he can barely hold himself upright. Salim can’t help but feel that he’s lost his father for good. Decades later, Sharif is still haunted by how quickly his life, his entire society was erased. He obsesses over what he could’ve done to change his family’s fate. His son SALIM now has a family of his own, and they’ve managed to build their lives in a dilapidated refugee camp in the occupied West Bank. One day, Salim is rushing his young son NOOR home at the onset of an unexpected curfew. But they’re caught by a group of Israeli soldiers. In a troubling encounter, Noor is forced to see that his own father can’t protect him. In that instant, his perspective shifts, and the man who was once his hero is deemed a coward.  Nearly a decade later, the West Bank is ablaze with resistance. NOOR, now a rebellious teen, fearlessly confronts Israeli soldiers at a protest that descends into chaos. He’s injured and taken to a hospital. As doctors set out to save their son, Salim and Hanan manage to find a glimmer of hope to help them make meaning of all the pain they’ve had to carry.",
        },
      ],
      content: [
        {
          title: "Apocalypse Now",
          year: "1979",
          image: "",
          category: "suspense",
          category2: "new",
          trailer: "https://youtu.be/9l-ViOOFH-s",
          description: "this is the description",
        },
      ],
      events: [
        {
          id: 1,
          title: "DIY Analog Filmmaking",
          year: "2024",
          image: "/img/bolex2.jpg",
          category: "new",
          description:
            "Get hands-on experience shooting with a Bolex Reflex camera, processing film using non-toxic household items, and editing by hand using analog equipment. The workshop will take place in Austin Texas. (If you have access to the necessary equipment you're welcome to join online!)",
          instruction2: "",
          instruction:
            "E-mail info@ccearts.org to be included in the next cohort.",
          trailer: "",
        },
      ],
    },
    actions: {
      toggleNavOpen: () => {
        const store = getStore();
        setStore({ isNavOpen: !store.isNavOpen });
      },
      setShowContactModal: (show) => {
        setStore({ showContactModal: show });
      },
      setIsNavOpen: (isOpen) => {
        setStore({ isNavOpen: isOpen });
      },
      toggleContactModal: () => {
        const store = getStore();
        setStore({ showContactModal: !store.showContactModal });
      },
      openModal: () => {
        setStore({ modalIsOpen: true });
      },
      closeModal: () => {
        setStore({ modalIsOpen: false });
      },
      toggleModal: (id = null) => {
        const store = getStore();
        if (id === null) {
          setStore({ modalIsOpen: false, activeEventId: null });
        } else {
          setStore({ modalIsOpen: true, activeEventId: id });
        }
      },
    },
  };
};

export default getState;
