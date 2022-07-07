'Systemutil.Run"chrome.exe","https://www.zomato.com/"
'executeTest("TC_011") @@ script infofile_;_ZIP::ssf46.xml_;_
  @@ script infofile_;_ZIP::ssf187.xml_;_
'---------------------------------------UF1120-----------------------------------------------
  'test11() @@ script infofile_;_ZIP::ssf97.xml_;_
  'test12()
  'test13()
  'test14()
  'test15()
  'test16()
  ''test17()
  ''test18()
  'test19()
  'test20()
 @@ script infofile_;_ZIP::ssf98.xml_;_
 @@ script infofile_;_ZIP::ssf88.xml_;_
 '-------------------------------'UF'---------------------------------------' 
'TopR()
'TopRB()
 'BTW()
 'BUGking()
 'DOMI()
 'HaldiRam()
 'KFC()
 'OM()
 'ApplinkEmail()
'APPLinkCont() @@ script infofile_;_ZIP::ssf3.xml_;_

On Error Resume Next
Dim path
path="C:\Users\user243\Documents\zomato\test data\Test Data.xlsx"
DataTable.AddSheet "Test Data"
DataTable.ImportSheet path,"zomatow","Test Data"

rowCount = DataTable.GetSheet("Test Data").GetRowCount

For rows = 1 To rowCount

DataTable.SetCurrentRow rows

If DataTable.Value("Expected_Flag","Test Data")="Y" Then
executeTest (DataTable.Value("TestCaseID","Test Data"))
DataTable.Value("Result","Test Data") = Environment.Value("Result")
End If

Next

DataTable.ExportSheet path,"Test Data","zomatow"
