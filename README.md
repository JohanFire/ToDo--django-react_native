# django-react_native
 First Django + React Native project

## Install necessary dependencies
all obviusly inside a virtual env
- `pip3 install Django djangorestframework`

---

## Start Django project
`django-admin startproject API`

---

## Make migrations
python manage.py migrate

---

## Start app
`python manage.py startapp api_rest`

---

## Create super user 
`python manage.py createsuperuser`

--- 

# Serializers
after creating [serializer.py](./API/api_rest/serializers.py) with his respective code, we can create an object in Article's table by console
for this:
`python manage.py shell`
```python
    from api_rest.models import Article
    from api_rest.serializers import ArticleSerializer
    from rest_framework.renderers import JSONRenderer
    from rest_framework.parsers import JSONParser
    a = Article(title="Titulo del articulo", description = "esta es la descripcion")
    a.save()

    serializer = ArticleSerializer(a)
    serializer.data
{'title': 'Titulo del articulo', 'description': 'esta es la descripcion'}
    ...
```
At this point I've translated the Article Model into python native data types, dictionaries

## Finalize serialization process
render data into json
```python

    ...

    json = JSONRenderer().render(serializer.data)
    json
b'{"title":"Titulo del articulo","description":"esta es la descripcion"}'

    import io
    stream = io.BytesIO(json) 
    data = JSONParser().parse(stream) 
    serializer = ArticleSerializer(data=data)
    serializer.is_valid()
True
    serializer.validated_data
OrderedDict([('title', 'Titulo del articulo'), ('description', 'esta es la descripcion')])
```

---

## Model Serializer
`python manage.py shell`
```python
>>> from api_rest.serializers import ArticleSerializer
>>> serializer = ArticleSerializer()
>>> print(repr(serializer)) 
ArticleSerializer():
    id = IntegerField(label='ID', read_only=True)
    title = CharField(max_length=100)
    description = CharField(style={'base_template': 'textarea.html'})
>>> 
```

---

# Class-based Views in Django Rest Framework
we can also write our API views using class-based views. rather than function based views (as I did in the previous section).
This is a powerfull pattern that allows us to reuse common functionality, and helps us to keep our code DRY (Don't Repeat Yourself).

---

# Mixins
One of the big wins of using class-based views is that it allows us to easily compose reusable bits of behaviour.

The create/retrieve/update/delete operations that we've been using so far are going to be pretty similar for any model-backed API views we create. Those bits of common behaviour are implemented in REST framework's mixin classes.

---

# ViewSets & Routers
REST framework includes an abstraction for dealing with ViewSets, that allows the developer to concentrate on modeling the state and interactions of the API, and leave the URL construction to be handled automatically, based on common conventions.

## ViewSets
The ViewSet class inherits from APIView. You can use any of the standard attributes such as permission_classes, authentication_classes in order to control the API policy on the viewset.

The ViewSet class does not provide any implementations of actions. In order to use a ViewSet class you'll override the class and define the action implementations explicitly.

## GenericViewSet
The GenericViewSet class inherits from GenericAPIView, and provides the default set of get_object, get_queryset methods and other generic view base behavior, but does not include any actions by default.

In order to use a GenericViewSet class you'll override the class and either mixin the required mixin classes, or define the action implementations explicitly.

## ModelViewSet
The ModelViewSet class inherits from GenericAPIView and includes implementations for various actions, by mixing in the behavior of the various mixin classes.

The actions provided by the ModelViewSet class are .list(), .retrieve(), .create(), .update(), .partial_update(), and .destroy().

---

# React Native

## Create a new Expo project
```bash
    npx create-expo-app project-name
```

## Run the project
```bash
    cd project-name
    npm start # you can also use: npx expo start
```
or...
To run your project, navigate to the directory and run one of the following npm commands.

- cd project-name
- npm run android
- npm run ios # you need to use macOS to build the iOS project - use the Expo app if you need to do iOS development without a Mac
- npm run web

---

## Install react-native-paper
https://callstack.github.io/react-native-paper/getting-started.html
```bash
    npm install react-native-paper
```

---

## Send data through components & classes

### Props
you can send data through components with props.
props are inmutable and not changeable

so if you want to change the value of the argument, you can use:

---

### State
you can use state to change the value of the argument

---

## Functional Component

---

## FlatList
has scroll 

---

## Floating Action Button

---

## Fetching data from API
```bash
    python manage.py runserver 192.168.56.1:80  
```
had to change the port of the api to this one, because the default one was giving problems

---

## React Native Navigation
https://reactnavigation.org/docs/getting-started
### 1.- install React Navigation
```bash
    npm install @react-navigation/native
```

### 2.- install necessary dependencies

dependencies if using Expo:
`npx expo install react-native-screens react-native-safe-area-context`

dependencies if using React Native CLI:
`npm install react-native-screens react-native-safe-area-context`

### 3.- Install Stack Navigator
__also need to install stack Navigator__
https://reactnavigation.org/docs/stack-navigator/

Expo:
`npm install @react-navigation/stack`

React Native CLI:
`npm install react-native-gesture-handler`

---