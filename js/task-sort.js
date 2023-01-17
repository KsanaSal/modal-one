const data = [
    {
        id: "1",
        name: "Allen Raymond",
        email: "nulla.ante@vestibul.co.uk",
        phone: undefined,
    },
    {
        id: "2",
        name: "Chaim Lewis",
        email: "dui.in@egetlacus.ca",
        phone: "(294) 840-6685",
    },
    {
        id: "3",
        name: "Kennedy Lane",
        email: "mattis.Cras@nonenimMauris.net",
        phone: "(542) 451-7038",
    },
    {
        id: "4",
        name: "Wylie Pope",
        email: "est@utquamvel.net",
        phone: "(692) 802-2949",
    },
    {
        id: "5",
        name: "Cyrus Jackson",
        email: "nibh@semsempererat.com",
        phone: null,
    },
    {
        id: "6",
        name: "Abbot Franks",
        email: "scelerisque@magnis.org",
        phone: "(186) 568-3720",
    },
    {
        id: "7",
        name: "Reuben Henry",
        email: "pharetra.ut@dictum.co.uk",
        phone: "(715) 598-5792",
    },
    {
        id: "8",
        name: "Simon Morton",
        email: "dui.Fusce.diam@Donec.com",
        phone: "(233) 738-2360",
    },
    {
        id: "9",
        name: "Thomas Lucas",
        email: "nec@Nulla.com",
        phone: "(704) 398-7993",
    },
    {
        id: "10",
        name: "Alec Howard",
        email: "donec.elementum@scelerisquescelerisquedui.net",
        phone: "(748) 206-2688",
    },
    {
        id: "11",
        name: "Oksana Salivon",
        email: "ksana@mail.com",
        phone: "(123) 456-4569",
    },
    {
        id: "12",
        name: "Dana Solo",
        email: "ksanasal@mail.com",
        phone: "(456) 159-2589",
    },
    {
        id: "13",
        name: "Sana Swan",
        email: "ksana@mail.com",
        phone: "(123) 456-4569",
    },
    {
        id: "14",
        name: "Ksana Sich",
        email: "sichksana@mail.com",
        phone: "(123) 259-4569",
    },
    {
        id: "15",
        name: "Irena Savinova",
        email: "ksana@mail.com",
        phone: "(123) 456-4569",
    },
    {
        id: "16",
        name: "Sasha Sal",
        email: "sashasal@mail.com",
        phone: "(123) 456-4569",
    },
    {
        id: "17",
        name: "Oksana Kubaneth",
        email: "ksanakub@mail.com",
        phone: "(589) 456-4569",
    },
    {
        id: "18",
        name: "Ksana Kuba",
        email: "kubksana@mail.com",
        phone: "(589) 456-4569",
    },
    {
        id: "19",
        name: "Lara Kobaneth",
        email: "larakub@mail.com",
        phone: "(456) 159-4893",
    },
];

const phone = data.sort((a, b) =>
    a.phone ? a.phone.localeCompare(b.phone) : 1
);
console.log(phone);

const phoneTwo = data.sort((a, b) =>
    b.phone ? b.phone.localeCompare(a.phone) : 1
);
console.log(phoneTwo);
