# Simple automated Bootstrap HTML template

# Place in whatever directory you are working in, and create your template like this in bash:

# $ './name_of_file.sh > index.html', where name of file is what you called your template file, and index.html is the one you're creating

cat << _EOF_
<!doctype html>
<html>
<head>
    <title>Bootstrap HTML Template</title>
	<link rel="stylesheet" type="text/css" href="reset.css">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
	<link rel="stylesheet" type="text/css" href="styles.css">
</head>

<body>
	<div class="container">
		<div class="row">
		<p>Row 1</p>
			<div class="col">
			<p>Row 1 Column 1</p>
			</div>
		</div>
		<div class="row">
		<p>Row 2</p>
			<div class="col">
			<p>Row 2 Column 1</p>
			</div>
		</div>
		<div class="row">
		<p>Row 3</p>
			<div class="col">
			<p>Row 3 Column 1</p>
			</div>
		</div>
		<div class="row">
		<p>Row 4</p>
			<div class="col">
			<p>Row 4 Column 1</p>
			</div>
		</div>
	</div>
	<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

</body>

</html>
_EOF_