from django.urls import path,include
from .views import CollegeView,RegisterView,AdImgView
from rest_framework import routers
from rest_framework.authtoken.views import obtain_auth_token


route=routers.DefaultRouter()
route.register('college',CollegeView,basename='collegeview')
route.register('adimg', AdImgView, basename='adimgview')


urlpatterns = [
    path('api/', include(route.urls)),
    path('register/',RegisterView.as_view(),name='register'),
    path('login/',obtain_auth_token,name='login')
    
    
]