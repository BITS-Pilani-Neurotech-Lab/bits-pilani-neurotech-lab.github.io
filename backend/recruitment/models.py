from django.db import models

class Application(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    track = models.CharField(max_length=50)
    portfolio = models.URLField(blank=True, default='')
    sop = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.track}"
