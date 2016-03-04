__author__ = 'ee'
from django.conf.urls import url
from mainApp import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
]
