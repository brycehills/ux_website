from django.shortcuts import render

# views

#logic to display html for user form request
def user_form(request):
    if request.method == 'POST':
        form = UserInfoForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('success')
        
    else:
        form = UserInfoForm()

    # returns template 
    return render(request, 'userform/user_form.html', {'form': form})

# view for successful user form interaction
def success(request):
    return render(request, 'userform/success.html')
