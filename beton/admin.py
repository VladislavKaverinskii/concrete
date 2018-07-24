from django.contrib import admin

from .models import MainPageBlock, Service, Deleivery, DeleiveryImage, DeleiveryPoint


admin.site.register(MainPageBlock)
admin.site.register(Service)
admin.site.register(Deleivery)
admin.site.register(DeleiveryImage)
admin.site.register(DeleiveryPoint)

class DeleiveryInline(admin.TabularInline):
    model = Deleivery

class DeleiveryImageAdmin(admin.ModelAdmin):
    inlines = [
        DeleiveryInline,
    ]
