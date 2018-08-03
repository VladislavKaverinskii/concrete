from django.contrib import admin

from .models import MainPageBlock, Service, Deleivery, DeleiveryImage, DeleiveryPoint, MaterialType, MaterialPrice, PricePage, Photo, Partner
from .models import Contact, Phone, Proposal, Vacation, CandidateRequirement, WorkingCondition

admin.site.register(MainPageBlock)
admin.site.register(Service)
admin.site.register(Deleivery)
admin.site.register(DeleiveryImage)
admin.site.register(DeleiveryPoint)
admin.site.register(MaterialType)
admin.site.register(MaterialPrice)
admin.site.register(PricePage)
admin.site.register(Partner)
admin.site.register(Contact)
admin.site.register(Phone)
admin.site.register(Proposal)
admin.site.register(Vacation)
admin.site.register(CandidateRequirement)
admin.site.register(WorkingCondition)

class DeleiveryInline(admin.TabularInline):
    model = Deleivery

class DeleiveryImageAdmin(admin.ModelAdmin):
    inlines = [
        DeleiveryInline,
    ]
	

	
# Класс для админки с отображением миниатюры в листе изображений (get_mini_html)
# и возможностью физического, пакетного удаления 
# изображений и миниатюр (full_delete_selected)
class PhotoAdmin(admin.ModelAdmin):
    admin.site.disable_action('delete_selected')
    def full_delete_selected(self, request, obj):
        for o in obj.all():
            o.delete()
    full_delete_selected.short_description = 'Удалить выбранные иллюстрации'
    actions = ['full_delete_selected']
    list_display = ('title', 'captions', 'get_mini_html')

	
admin.site.register(Photo, PhotoAdmin)

from photologue.admin import GalleryAdmin as GalleryAdminDefault
from photologue.models import Gallery
from .models import GalleryExtended

admin.site.unregister(Gallery)



class GalleryExtendedInline(admin.StackedInline):
    model = GalleryExtended
    can_delete = False


class GalleryAdmin(GalleryAdminDefault):

    """Define our new one-to-one model as an inline of Photologue's Gallery model."""

    inlines = [GalleryExtendedInline, ]



admin.site.register(Gallery, GalleryAdmin)





