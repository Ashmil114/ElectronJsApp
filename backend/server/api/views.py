from django.shortcuts import render
from .models import Colleges
from .serializers import CollegeSerializer,UserRegisterSerializer
from rest_framework import viewsets
from rest_framework.views import APIView
# from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from .models import AdImg
from .serializers import AdImgSerializer


class CollegeView(viewsets.ModelViewSet):
    queryset=Colleges.objects.all()
    serializer_class=CollegeSerializer
    # permission_classes=[IsAuthenticated]
    # authentication_classes=(TokenAuthentication,)



class RegisterView(APIView):
    
    def post(self,request,format=None):
        serializer=UserRegisterSerializer(data=request.data)
        data={}
        if serializer.is_valid():
            account=serializer.save()
            data['response']='Registered'
            data['username']=account.username
            token,create=Token.objects.get_or_create(user=account)
            data['token']=token.key
        
        else:
            data=serializer.errors
        return Response(data)  

class AdImgView(viewsets.ModelViewSet):
    queryset = AdImg.objects.all()
    serializer_class = AdImgSerializer