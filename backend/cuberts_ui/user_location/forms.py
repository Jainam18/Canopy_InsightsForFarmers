from django import forms

class LocationForm(forms.Form):
    latitude = forms.FloatField(
        label='Latitude',
        min_value=-90,
        max_value=90,
        widget=forms.NumberInput(attrs={'step': 'any'})
    )
    longitude = forms.FloatField(
        label='Longitude',
        min_value=-180,
        max_value=180,
        widget=forms.NumberInput(attrs={'step': 'any'})
    )
    area = forms.FloatField(
        label='Area (sq km)',
        min_value=0,
        widget=forms.NumberInput(attrs={'step': 'any'})
    )