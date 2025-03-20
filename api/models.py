from djongo import models

class User(models.Model):
    username = models.CharField(max_length=150, unique=True)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255)
    fullname = models.CharField(max_length=255)
    gender = models.CharField(max_length=10)
    birthdate = models.DateField()

    def __str__(self):
        return self.username