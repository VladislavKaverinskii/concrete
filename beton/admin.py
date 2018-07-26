from django.contrib import admin

from .models import MainPageBlock, Service, Deleivery, DeleiveryImage, DeleiveryPoint, MaterialType, MaterialPrice


admin.site.register(MainPageBlock)
admin.site.register(Service)
admin.site.register(Deleivery)
admin.site.register(DeleiveryImage)
admin.site.register(DeleiveryPoint)
admin.site.register(MaterialType)
admin.site.register(MaterialPrice)

class DeleiveryInline(admin.TabularInline):
    model = Deleivery

class DeleiveryImageAdmin(admin.ModelAdmin):
    inlines = [
        DeleiveryInline,
    ]
