//shallow copy
const user = {
                id: 101,
                name: "Ravi",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
              };
let copy={...user}
copy.name="Aksh";
copy.preferences.theme="black";
console.log(user)
console.log(copy)

