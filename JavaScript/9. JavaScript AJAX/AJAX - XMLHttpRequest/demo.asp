<%
' Retrieve the parameters from the URL
Dim fname, lname
fname = Request.QueryString("fname")
lname = Request.QueryString("lname")

' Set the content type to plain text
Response.ContentType = "text/plain"

' Generate a response based on the parameters
Response.Write "Hello, " & fname & " " & lname & "! This is the response from the ASP file."
%>
