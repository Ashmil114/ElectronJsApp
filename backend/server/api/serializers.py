from rest_framework import serializers
from django.contrib.auth import get_user_model
# from rest_framework.authtoken.views import Token
from .models import Colleges
from .models import AdImg

User=get_user_model()



class CollegeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Colleges
        fields='__all__'



    
class UserRegisterSerializer(serializers.ModelSerializer):
    password2=serializers.CharField(style={'input_type':'password'},write_only=True)
    
    class Meta:
        model=User
        fields=['username','password','password2']
    
    def save(self):
        reg=User(
            username=self.validated_data['username'],
        )
        password=self.validated_data['password']
        password2=self.validated_data['password2']
        
        if password!=password2:
            raise serializers.ValidationError({'password':'password does not match'})
        
        reg.set_password(password)
        reg.save()
        return reg
        
           
class AdImgSerializer(serializers.ModelSerializer):
    class Meta:
        model=AdImg
        fields='__all__'