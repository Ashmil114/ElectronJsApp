@ECHO OFF
call  ..\env\Scripts\activate.bat
start /min pip install -r requirements.txt
start /min python manage.py runserver
@REM echo /max wait some time user app is ready for rendering...
@REM echo Press any key to stop the server...
@REM pause >nul