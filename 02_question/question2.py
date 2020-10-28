class Mouth:
    "Mouth"

    def __init__(self, person, mouth =  False):
        self.mouth = mouth
        self.person = person
  

    def open(self):
        "Open Mouth"

        self.mouth = True
        if self.mouth:
            print(self.person, ": 'o' AAAHHHHH")
            self.mouth = False
            print(self.person,": '-'")

      
  
    def close(self):
        self.mouth = False
        print(self.person, ":Who are you my doctor?  '-'")
  
    def askToOpen(self, person):
        print(person.occupation,  ':  Open your mouth please.')
        if person.occupation == 'doctor':
            print(self.person, "Okay Doc!")
            self.open()
        else:
            self.mouth = False
            print(self.person, ":Who are you my doctor?  '-' ")
   

m = Mouth('David')
  

  



class Person:
    "Person Occupation"
    def __init__(self, occupation):
      self.occupation = occupation


d = Person('doctor')
t = Person('teacher')
l = Person('lawyer')


m.askToOpen(l)
print('=========')
m.askToOpen(t)
print('=========')
m.askToOpen(d)